import express from "express";
import Customer from "./models/customers.js";
import logger from "morgan";
import sequelize from "./db/db.js";

const app=express();
const port=5600;
const host="localhost";

app.use(logger("dev"));
app.use(express.json());

const syncDatabase=async()=>{
    try{
        await sequelize.sync({alter:true});
        console.log("Synced successful");
    }catch(error){
        console.log("Error to sync",error);
    }
}

syncDatabase();

app.post("/addcustomer",async(req,res)=>{
    const{first_name,last_name,email,phone}=req.body;
    try{
        const result= await Customer.create({first_name,last_name,email,phone});
        res.status(201).json(result);
    }catch(error){
        res.status(500).json({
            message:"Unable to add customer",
            error:error.message
        })
    }
})


app.put("/updatecustomer/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const{first_name,last_name,email,phone}=req.body;
        const result=await Customer.update({first_name:first_name,last_name:last_name,email:email,phone:phone},{where:{id:id}});
        res.status(200).json(result);
        
    }catch(error){
        res.status(500).json({
            message:"Unable to update",
            error:error.message
        })
    }
    
})

app.listen(port,host,()=>{
    console.log("Works")
})