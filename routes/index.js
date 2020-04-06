var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', loggedIn : req.session.usuario,nombre_usuario:req.session.nombre, panel:req.session.admin});
});

router.get('/cerrar', function(req, res, next) {
  req.session.usuario=false;
  req.session.nombre=null;
  req.session.admin=null;
  console.log("el valor es"+req.session.usuario);
  console.log("el nombre es"+req.session.nombre);


  res.render('index', { title: 'Express', loggedIn : req.session.usuario,nombre_usuario:req.session.nombre });
});


module.exports = router;
