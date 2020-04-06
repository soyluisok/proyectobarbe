var express = require('express');
var router = express.Router();
const reviewsModel = require('../models/reviewsModel');
const moment = require('moment');

/* GET home page. */

router.get('/', async(req, res, next)=> {
  try{
      let data = await reviewsModel.getBarbers();
      let data2 = await reviewsModel.getReviews();
      res.render('reviews',{tickets_array : data, reviews_array : data2,loggedIn : req.session.usuario,nombre_usuario:req.session.nombre,panel:req.session.admin});
      console.log(data);
  }catch(error){
      console.log(error);
  }

});

router.get('/idbarber', function(req, res, next) {

    let id=req.params.idbarber;
    res.render('reviews');
}); 

router.post('/', async function(req, res, next) {
  /*let fecha = moment().format('YYYY-MM-DD');
  let id_noticia = req.body.id;
  let comentario = req.body.comentario;

  let objComentario = {
    id_barber : id_noticia,
    review : comentario,
    fecha : fecha

  }*/

  let nombre = req.body.nom;
  let review = req.body.comentario;
  let id = await reviewsModel.obtenerId(nombre);
  console.log("el perfil es"+id[0].perfil);
  console.log("El id de: "+nombre+" es: "+id);

  console.log(req.body.nom);
  console.log(req.body.comentario);

  let objComentario = {
    id_barber : id[0].id,
    perfil : id[0].perfil,
    nombre : nombre,
    review : review
    
  };

  console.log("el objeto guardado es"+objComentario);
  
  let resultado = await reviewsModel.insertoComentario(objComentario);
  res.redirect('reviews');
  


});



module.exports = router;
