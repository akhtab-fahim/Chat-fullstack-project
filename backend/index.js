import express from "express";
import axios from "axios";
import cors from "cors";
import env from "dotenv";

env.config();
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors({origin:true}));

app.get("/", (req,res)=>{
    res.send("Hello User");
})


app.post("/auth", async(req,res)=> {
    const {username } = req.body;
    
    try{
        const response = await axios.put("https://api.chatengine.io/users/",
            {username : username ,  secret : username , first_name : username},
            {headers : {"private-key" : process.env.SESSION_KEY}});
        console.log(response);
        return res.status(response.status).json(response.data);
    }catch(error){
        res.send(error.status);
    };
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})