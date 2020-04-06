const pool = require('../bd');
// pool : referencia a la base de datos :D

// 1. insertar los datos 

// 1. funcion y 3 lineas
async function createUser(objeto) {
    // {
        // fecha_nacimiento : ''
        // nombre : 'x',
        // mail : 'asd@gmail.com',
        // telefono : '1234',
        // password : '1234',
    //}
    try {
        // insert into usuario (nombre,mail,telefono,password,fecha_nacimiento) values ('franco','dileo.francoj@gmail.com','11111111','1234','1994-03-29');
        // let query = "insert into usuario (nombre,mail,telefono,password,fecha_nacimiento) values (?,?,?,?,?)";
        // const rows = await pool.query(query,[nombre,mail,telefono,password,fecha_nacimiento])
        let query ="insert into usuarios set ?";
        const rows = await pool.query(query,[objeto]);
        return rows;

    } catch(error) {
        console.log(error);
    }

}

async function authUser(user,password) {
    try {
        console.log("El usuario que llega al mode : ", user,  " el password que llega al model : ",password)
        // select * from usuario where mail = 'dileo.francoj@gmail.com' and password = '1234'
        let query = "select * from usuarios where email = ? and pw = ?";
        console.log(query);
        const rows = await pool.query(query,[user,password]);
        console.log("Lo que envia authUser: "+rows);
        return rows;
        
        // empty set : 0 registros
    } catch(error) {
        console.log(error);
    }
}

async function getNombreUsuario() {
    try {
        let query = "select nombre from usuarios where id_usuario ="+req.session.id;
        console.log(query);
        const rows = await pool.query(query,[req.session.id]);
        console.log("Lo que envia authUser: "+rows);
        return rows;
        
        // empty set : 0 registros
    } catch(error) {
        console.log(error);
    }
}

module.exports = {createUser,authUser,getNombreUsuario};