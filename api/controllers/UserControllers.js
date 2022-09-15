import {exeCuteQuery} from "../config/database.js";
import uniqid from "uniqid"

const getAllUser = (req,res) => {
    const query = "SELECT * FROM identity";
   
    exeCuteQuery(query,[])
        .then((data)=>res.status(200).json(data))
        .catch((err)=>res.status(404).json(err));

}

const createUser = async (req,res) => {
    const {nama,noHp,email} = req.body;
    const query = "INSERT INTO identity (idUser,nama,noHp,email) VALUES (?,?,?,?)"

    try {
        const dataUser = await exeCuteQuery(query,[uniqid(),nama,noHp,email]);

        res.status(201).json({"message":"Data berhasil ditambahkan"});
    }catch(err) {
        res.status(404).json(err);
    }
    
}

const updateUser = async (req,res) => {
    const {nama,noHp,email} = req.body;
    const {id} = req.params;
    
    const query = "UPDATE identity SET nama = ?,noHp = ?,email = ? WHERE idUser = ?"

    try{
        const dataId = await exeCuteQuery("SELECT * FROM identity WHERE idUser = ?",[id]);
        if(dataId.length > 0) {
            dataId = await exeCuteQuery(query,[nama,noHp,email,id])
            res.status(200).json({"message":"Data berhasil diupdate"})
        }
        
    }catch(err) {
        res.status(400).json(err);
    }


}

const deleteUser = async (req,res) => {
    const {id} = req.params;
    
    const query = "DELETE FROM identity WHERE idUser = ?";
    
    try{
        const dataDelete = await exeCuteQuery(query,[id]);
        res.status(200).json({"message":"Data berhasil dihapus"});
    }catch(err) {
        res.status(400).json(err)
    }
}


export {getAllUser,createUser,updateUser,deleteUser}