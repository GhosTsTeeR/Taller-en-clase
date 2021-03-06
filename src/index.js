const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const MySQLStore = require('express-mysql-session');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require('cors');


const {database} =require('./keys');


//Inicializaciones
const app = express();
app.use(cors());

require('./lib/passport');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));



//Ajustes
app.set('port', process.env.PORT || 4000);


app.use(express.urlencoded({extends: true}));
app.use(express.json());


//Peticiones 
app.use(session({
  secret: 'ghostmysqlnodesession',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));



app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(multer({storage}).single('img'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//Variables globales
app.use((req, res, next) => {
    app.locals.success =req.flash('success')
    app.locals.message =req.flash('message')
    app.locals.user = req.user;
    next();
});

//Rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/user', require('./routes/user'));
app.use('/user', require('./routes/producto'));
//Public
app.use(express.static(path.join(__dirname, 'public')));


//Inicia el server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});