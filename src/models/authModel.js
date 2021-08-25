'use strict'
const passport = require('passport');
const db = require('../database');
const helpers = require('../lib/helpers');

module.exports = function() {

    async function signUp(data, req,  res){
        
        var  Usuario= '';
        var  Password= '';
        var  Email= '';
        var  Nombre= '';
        var  Mobile= '';

        

        Usuario= data[0];
        Password= data[1];
        Email= data[2];
        Nombre= data[3];
        Mobile= data[4];

        const u = await db.query("SELECT * FROM user WHERE usuario = ?", [Usuario]);
        const c = await db.query("SELECT * FROM user WHERE Email = ?", [Email]);
        const m = await db.query("SELECT * FROM user WHERE Mobile = ?", [Mobile]);
        if (u.length > 0) {
            console.log("este usuario ya esta en la base de datos")
        }
        else if (c.length > 0 ) {
            console.log("este Correo ya esta en la base de datos")
        }
        else if (m.length > 0 ) {
            console.log("este Numero telefonico ya esta en la base de datos")
        }
        else {
            var pssw = await helpers.encryptPassword(Password);
            await db.query(`INSERT INTO Usuario (Username, Password, Email,  Nombre, Mobile)
                            values (?, ?, ?, ?, ?, ?) `, 
                            [Usuario, pssw,Email,Nombre,Mobile,]
            );
        }
       
    }    

    return {

        signUp,
        }
}