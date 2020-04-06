const express = require('express');
const router = express.Router();
const usuariosModel = require('../models/usuariosModel');
const md5 = require('md5');
// 1. router.get() : muestro la vista de registro
// 2. router.post()

//  /registro
router.get('/', (req,res,next)=> {
    res.render('register');
})

router.post('/', async (req,res,next)=> {
    // -
    console.log(md5(req.body.password));
    let objUsr = {
        email : req.body.usuario,
        pw: md5(req.body.password),
        nombre: req.body.nombre,
        
    }
    // validaciones
    let result = await usuariosModel.createUser(objUsr); // estado de la operacion insert
    // evalua el true
    if(result){
        res.render('register', {status : true,message : 'Registro exitoso'});
    } else {
        res.render('register', {status : false,message : 'Error'}); 
    }
})

module.exports = router;