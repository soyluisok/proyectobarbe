var express = require('express');
var router = express.Router();
const multer = require('multer');
var upload = multer({ dest: './uploads' });
const uuid = require('node-uuid');
const fs = require('fs');
const adminModel = require('../models/adminModel');
const reviewsModel = require('../models/reviewsModel')
const barberosModel = require('../models/barberosModel')

router.get('/editar/:id', async(req,res,next)=>{
    try{
        let id= req.params.id;
        let review = await barberosModel.getBarberId(id);
        res.render('editarreview',{barber_array : review, id : id,loggedIn : req.session.usuario,nombre_usuario:req.session.nombre,panel:req.session.admin});
        
    }catch(error){
        console.log(error);
    }

})

router.post('/editar', async(req,res,next)=>{
   try{
       console.log("que es: "+req.body.nombre);
       console.log("que es: "+req.body.descripcion);
        let id = req.body.id;
        var objreview = {
    
            nombre : req.body.nombre,
            descripcion : req.body.review,
        }


        console.log("el objeto es"+objreview);

        let descripcion = await barberosModel.editarBarberPorId(objreview,id);
        res.redirect('/admin');
        


    }catch(error){
        console.log(error);
    }

})


router.get('/altabarber',async(req,res,next)=>{
    try{
        /*let autores = await adminModel.getAutores();
        res.render('altabarber',{array_autores: autores});*/
        res.render('altabarber');
    }catch(error){}

    console.log(error);
})

router.post('/altabarber',upload.array('imagen',1), async(req,res,next)=>{

    try{
        console.log(req.files)
        var name_imagen ='';
        if(req.files[0].mimetype == 'image/jpeg' || req.files[0].mimetype =='image/png'){
            if(req.files[0].size <= 100000){
                let array_mime = req.files[0].mimetype.split('/');
                let ext = array_mime[1];
                let nombre_aleatorio= uuid();
                console.log("el nombre aleatorio de uuid es: "+nombre_aleatorio);
                name_imagen = nombre_aleatorio+"."+ext;
                console.log("nombre final : "+name_imagen);
                let temporal_name = req.files[0].filename;
                fs.createReadStream('./uploads/'+temporal_name).pipe(fs.createWriteStream('./public/images/'+name_imagen))
                console.log("archivo creado");
                fs.unlink('./uploads/'+temporal_name,(err)=>{
                    if(err){
                        console.log(err);
                    }
    
                })
                  
                      
            }else{
    
            }
        }    
        
        }catch(error){
            console.log(error);
        }



    try{
        

    console.log("El nombre de la imagen es"+name_imagen);    
    var objNoticia = {
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        perfil : name_imagen
    }
    console.log("lo que le llega al objnoticia : "+objNoticia);
    let resultado = await adminModel.agregarBarber(objNoticia);
    console.log("lo que le llega a resultado : "+resultado);
    res.redirect('/');
    }catch(error){
        console.log(error);
    }
})

router.get('/eliminar/:id', async(req,res,next)=>{
    try{
        let id = req.params.id;
        await barberosModel.eliminarBarberPorId(id);
        console.log("aaa");
        res.redirect('/admin');

    }catch(error){
        res.render('error');
    }
})


router.get('/', async(req, res, next)=> {
    try{
        let status_session;
    if(req.session.usuario) {
        status_session = true
    } else {
        status_session = false
    }
        let data = await barberosModel.getBarber();
        res.render('admin',{barber_array : data,loggedIn : status_session,nombre_usuario:req.session.nombre,panel:req.session.admin})
        console.log(data);
    }catch(error){
        console.log(error);
    }
  
});

module.exports = router;