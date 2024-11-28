import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Customer=sequelize.define("customers",{
    first_name:{
        type:DataTypes.STRING,
        null:false
    },
    last_name:{
        type:DataTypes.STRING,
        null:false
    },
    email:{
        type:DataTypes.STRING,
        null:false,
        unique:true
    },
    phone:{
        type:DataTypes.STRING,
        
    }
});

export default Customer;