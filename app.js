var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Primer linea de codigo para la creacion de sesion
const session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
const contactoRouter = require('./routes/contacto');
const reviewsRouter = require('./routes/reviews');
const logoutRouter = require('./routes/logout');
const barberRouter = require('./routes/barberos');
const adminRouter = require('./routes/admin');
const uploadRouter = require('./routes/upload');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Segunda linea de codigo para la creacion de sesion
app.use(session({
  secret : 'franquito:D', 
  // saveUninitialized : true,
  // resave : true,
  cookie : {maxAge : null}
  
}));

////Comprobar la sesion del usuario que ingresa y proteger las rutas que involucren al administrador

guardianAdmin = (req,res,next)=>{
  try{  
  console.log("la sesion protegida vale "+req.session.admin);
  if(req.session.admin){
    console.log("Iniciaste como admin");
    next();

  }else{
    console.log("No niciaste com admin");
    res.redirect('/login');
  }
  }catch(error){
    res.redirect('/login');
  }

}



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/contacto', contactoRouter);
app.use('/reviews', reviewsRouter);
app.use('/barberos', barberRouter);
app.use('/logout', logoutRouter);
app.use('/admin', guardianAdmin,adminRouter);
app.use('/upload', uploadRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
