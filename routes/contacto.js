var express = require('express');
var router = express.Router();
const correoModel = require('../models/correoModel');

router.get('/',(req,res,next)=>{
    
    res.render('contacto',{loggedIn : req.session.usuario,nombre_usuario:req.session.nombre,panel:req.session.admin});
})

router.post('/',async(req,res,next)=>{

    let objMsg = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        comentario: req.body.comentario
    };
    
    respuesta = await correoModel.main(objMsg);
    if(respuesta){
        res.render('contacto',{status: true, message: 'Correo enviado, en breve nos contactaremos'})
        
    }
    else
        {
            res.render('contacto',{status: true, message: 'Correo no enviado'})  
        }



})





module.exports = router;