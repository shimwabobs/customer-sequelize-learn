import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize=new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:"postgres",
        logging:false,
    }

)

const connectDB= async()=>{
    try{
        await sequelize.authenticate();
        console.log("Conncected successful");
    }
    catch(error){
        console.log("Unable to connect");
    }
}


connectDB();

export default sequelize;