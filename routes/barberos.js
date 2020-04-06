var express = require('express');
var router = express.Router();
const barberosModel = require('../models/barberosModel');
const usuariosModel = require('../models/usuariosModel');



router.get('/', async(req, res, next)=> {
  try{

    let status_session;
    if(req.session.usuario) {
        status_session = true
    } else {
        status_session = false
    }

      let data = await barberosModel.getBarber();
      
      res.render('barberos',{barber_array : data, loggedIn : status_session, nombre_usuario: req.session.nombre,panel:req.session.admin});
      console.log(data);
  }catch(error){
      console.log(error);
  }

});

module.exports = router;
