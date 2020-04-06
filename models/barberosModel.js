const pool = require('../bd');

async function getBarber(){
    try{
        let query = "select * from barber";
        let rows = await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}

async function getBarberId(id){    
    try {
        let query = "select * from barber where id =" +id;
        let rows = await pool.query(query);
        return rows; 

    }catch(error){
        console.log(error);
    }

}

async function editarBarberPorId(obj,id){
    try{
        let query = "update  barber set ? where id = ?";
        let rows = await pool.query(query,[obj,id]);
        return rows;
    }catch(error){
        throw error;
    }
}

async function eliminarBarberPorId(id){
    try{
        let query = "delete from barber where id = ?";
        let rows = await pool.query(query,id);
        return rows;
    }catch(error){
        throw error;
    }
}


module.exports = {getBarber,getBarberId,editarBarberPorId,eliminarBarberPorId}