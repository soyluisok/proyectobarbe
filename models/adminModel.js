const pool = require('../bd');

async function getTickets(){
    try {
        let query = "select * from barberos order by id_barber desc";
        let rows = await pool.query(query);
        return rows; 

    }catch(error){
        console.log(error);
    }
}

async function eliminarReviewPorId(id){
    try{
        let query = "delete from barberos where id = ?";
        let rows = await pool.query(query,id);
        return rows;
    }catch(error){
        throw error;
    }
}

async function editarReviewPorId(obj,id){
    try{
        let query = "update  barberos set ? where id = ?";
        let rows = await pool.query(query,[obj,id]);
        return rows;
    }catch(error){
        throw error;
    }
}


async function getBarber(){
    try{
        let query = "select * from barber";
        let rows = await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}

async function agregarBarber(obj){
    try{
        let query = "insert into barber set ?";
        console.log("lo que le llega al objnoticia : "+query);
        let rows =  await pool.query(query,obj);
        return rows;
    }catch(error){
        throw error;
    }
}

module.exports = {getTickets,eliminarReviewPorId,getBarber,agregarBarber,editarReviewPorId}