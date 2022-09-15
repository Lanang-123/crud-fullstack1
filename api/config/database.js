import {createPool} from "mysql";

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_user"
})

pool.getConnection((err)=>{
    if(err){
        console.log("Koneksi gagal")
    }
    console.log("Database berhasil terkoneksi")
});

const exeCuteQuery = (query,arrParams) => {
    return new Promise((resolve,reject)=>{
        try{
            pool.query(query,arrParams,(err,data)=>{
                if(err) {
                    console.log("Query Salah")
                    reject(err)
                }
                resolve(data)
            })
        }catch(err){

        }
    })
}


export {exeCuteQuery};