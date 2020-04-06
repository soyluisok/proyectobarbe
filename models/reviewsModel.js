const pool = require('../bd');

async function getReviews(){    
        try {
            let query = "select * from barberos order by id desc";
            let rows = await pool.query(query);
            return rows; 
    
        }catch(error){
            console.log(error);
        }
    
}

async function getBarbers(){    
    try {
        let query = "select * from barber";
        let rows = await pool.query(query);
        return rows; 

    }catch(error){
        console.log(error);
    }

}

async function getReview(id){    
    try {
        let query = "select * from barberos where id =" +id;
        let rows = await pool.query(query);
        return rows; 

    }catch(error){
        console.log(error);
    }

}

async function insertoComentario(objeto){
    try{
        let query = "insert into barberos set ?";
        const rows = await pool.query(query,[objeto]);
        return rows;
    } catch(error){
        console.log(error);
    }
}

async function obtenerId(nombre){
    try{
        let query = "select id,perfil from barber where nombre ='"+nombre+"'";
        let rows = await pool.query(query);
        return rows;
    } catch(error){
        console.log(error);
    }
}

module.exports={getReviews,getReview,insertoComentario,getBarbers,obtenerId}