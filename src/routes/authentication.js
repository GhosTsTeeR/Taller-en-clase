const express= require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../controllers/authController');


router.get('/',(req,res)=>{
    res.send('Welcome bb');
});
// Signup signin
router.post('/signup', auth.signUp);

router.post('/signin', (req, res, next)=>{
    console.log("estamos en siginnmsm")
    passport.authenticate('local.signin', {
        successRedirect: '/user/inicio',
        failureRedirect: '/signIn',
        failureFlash: true
    })(req, res, next);
});
module.exports= router;

