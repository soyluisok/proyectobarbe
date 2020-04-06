var express = require('express');
var router = express.Router();
const usuariosModel = require('../models/usuariosModel');
const md5 = require('md5');

router.get('/',(req,res,next)=>{

    res.render('login');
})

router.post('/',async(req,res,next)=>{

    if(req.body.password != "" && req.body.usuario !=""){
        let result = await usuariosModel.authUser(req.body.usuario,md5(req.body.password));
        console.log("el resultado de result"+result);
        if(result.length > 0) {
            // almaceno el id del ser humano
            console.log("sesion inciada!");
            let permisos = result[0].permisos;
            console.log(result[0].email)
            console.log(result[0].permisos)
            let id = result[0].id_usuario;
            req.session.nombre = result[0].nombre;
            console.log("El nombre es: "+req.session.nombre);
            // crear la sesion
            // creo una variable superglobal llamada usuario que almacena el id del usuario de la consulta en el model
            
            
            if(permisos == 1){
                req.session.admin = id;  
                req.session.usuario = id;              
            }else {
                req.session.usuario = id;
                
            }
                        
            console.log("La sesion vale : ",req.session.usuario);

            let status_session;
            if(req.session.usuario) {
                status_session = true
            } else {
                status_session = false
            }
            

            console.log("la sesion es="+status_session);
            res.render('index', {
                loggedIn : status_session,
                nombre_usuario: result[0].nombre,
                panel:req.session.admin
            });


        } else {
            res.render('login',{message:"Usuario o password incorrectos"})

        }

    }
    else{
        res.render('login',{message:"los datos no son correctos"})
    }

})

module.exports = router;