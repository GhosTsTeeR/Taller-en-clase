'use strict'
const db = require('../database');
+

module.exports = function() {

    async function galleryUpDate(data, req,  res){
        
        var  Text= '';
        var  Time= '';
        var  Img= '';
        var  Fk_idUser= '';

        

        Text= data[0];
        Time= data[1];
        Img= data[2];
        Fk_idUser= data[3];

        await db.query(`INSERT INTO Gallery (Text, Time, Img, Fk_idUser)
                        values (?, ?, ?, ?) `, 
                        [Text, Time,Img,Fk_idUser,]
        );
       
    }
    async function getGallery(req) {
        let query = `SELECT * FROM Gallery
        `;
        const data = await db.query(query)
        return data
    }
      
    async function modifiGallery(data, id, req,  res){
        
        var  Text= '';
        var  Time= '';
        var  Img= '';
        var  Fk_idUser= '';

        

        Text= data[0];
        Time= data[1];
        Img= data[2];
        Fk_idUser= data[3];
        console.log(Text, Time, Fk_idUser, Img, id);

        await db.query('UPDATE Gallery SET Text= ?, Time= ?, Img= ?, Fk_idUser= ? WHERE idGallery = ?', [Text, Time, Img, Fk_idUser, id]);

       
    }
    async function deleteGallery( id, req,  res){
        


        await db.query('DELETE FROM Gallery WHERE idGallery = ?', [ id]);

       
    }
    return {

        galleryUpDate,
        getGallery,
        modifiGallery,
        deleteGallery,
        }
}