const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('./helpers');  


passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, username, password, done) => {
    const rows = await pool.query("SELECT * FROM tbl_users WHERE username = ?", [username]);
    if (rows.length > 0) {
      const user = rows[0];
      const validPassword = await helpers.matchPassword(password, user['PASSWORD']);
      console.log(validPassword);
      if (validPassword) {
        console.log("lo logro :,3")
        done(null, user, req.flash('success', 'Hola ' + rows[0].Username));
        console.log(user.username)
      } else {
        console.log("contraseña incorrecta papi papi")
        done(null, false, req.flash('message', 'Contraseña Incorrecta.'));
      }
    } else {
      console.log("usuario incorrecto papi")
      return done(null, false, req.flash('message', 'Usuario Incorrecto.'));
    }
  }));


passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
  console.log("lo lograste"+ username)
  const {Email,
    Name,
    Surname,
    DocumentCC,
    CellPhone,
    Landline,
    Fk_idRol,
    Fk_idImgPerfi,
    Fk_imgPortada,
    Fk_idCarpetarInfo,
    State} =req.body;
    const newUser = {
      username,
      password,
      Email,
      Name,
      Surname,
      DocumentCC,
      CellPhone,
      Landline,
      Fk_idRol,
      Fk_idImgPerfi,
      Fk_imgPortada,
      Fk_idCarpetarInfo,
      State,
    };
    console.log("lo lograste"+ newUser)
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO usuario set ?', [newUser]);
    newUser.id = result.insertId
    return done(null, newUser);
}));
passport.serializeUser(function(user, done) { done(null, user); }); 
passport.deserializeUser(function(user, done) {
    done(null, user);
  });