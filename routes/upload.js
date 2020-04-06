const express = require('express');
const router = express.Router();
const multer = require('multer');
var upload = multer({ dest: './uploads' });
const uuid = require('node-uuid');
const fs = require('fs');


router.get('/',(req,res,next)=>{
    try{      
        res.render('upload');
    }catch(error){
        console.log(error);
    }   
})

router.post('/', upload.array('imagen',1),async(req,res,next)=>{
    try{
    console.log(req.files)
    if(req.files[0].mimetype == 'image/jpeg' || req.files[0].mimetype =='image/png'){
        if(req.files[0].size <= 100000){
            let array_mime = req.files[0].mimetype.split('/');
            let ext = array_mime[1];
            let nombre_aleatorio= uuid();
            console.log("el nombre aleatorio de uuid es: "+nombre_aleatorio);
            let name_imagen = nombre_aleatorio+"."+ext;
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
    res.end();
    }catch(error){
        console.log(error);
    }
})


module.exports = router;