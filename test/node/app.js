const express = require("express");
const cors = require("cors");
const users = require("./users");
// const bodyParser = require("body-parser");//deprecated
const app = express();
const PORT = 3001;

app.use(cors());
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,resp)=>{
    resp.send(__dirname + "/index.html");
});
app.get("/users",(req,resp)=>{
    resp.send(users);
});
app.post("/users",(req,resp)=>{
    console.log(req.body)
    const user = req.body;
    user.id = Math.random();

    resp.send(user);
})
app.listen(PORT,()=>{
    console.log("HELLO!");
});
