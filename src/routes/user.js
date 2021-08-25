
const express = require('express');

const router = express.Router();
const user = require('../controllers/userController');



router.get('/',(req,res)=>{
    res.send('Welcome bb');
});


router.post('/galleryupdate', user.galleryUpDate);

router.get('/getgallery', user.getGallery);

router.put('/modifygallery/:id', user.modifyGallery);

router.delete('/deletegallery/:id', user.deleteGallery);

    





module.exports = router;
