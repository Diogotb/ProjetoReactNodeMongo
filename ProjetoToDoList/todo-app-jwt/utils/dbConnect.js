import mongoose from "mongoose";

const dataBaseUrl = process.env.DATABASE_URL;

if (!dataBaseUrl) {
    throw new Error(".env.local não encontrado");
}

const connectToDatabase = async =>{
    if (mongoose.connection.readyState >0) {
        return; // se State > 0  então já esta connectado - so retornar
    }else{
        mongoose.connect(dataBaseUrl)
        .catch(err=>console.error(err));
    }
}

export default connectToDatabase;