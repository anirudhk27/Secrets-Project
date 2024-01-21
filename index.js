//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import  express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
var pass="";
const xyz=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(xyz+"/public/index.html");
});

app.post("/check",(req,res,next)=>{
    pass=req.body["password"];
    if(pass==="ILoveProgramming")
    {    
        res.sendFile(xyz+"/public/secret.html");
    }    
    else
    {    
        res.sendFile(xyz+"/public/index.html");
    }    
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});