const express=require("express");
const app=express();
const path=require("path")
const mongoose = require('mongoose');
const chat=require("./models/chat.js")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1=new chat({
//     from:"neha",
//     to:"sneha",
//     msg:"I am a looser",
//     Created_at:new Date()

// })
// chat1.save().then((res)=>{
//     console.log(res);
// })
app.get("/",(req,res)=>{
    res.send("root is working");
});
app.get("/chats",async(req,res)=>{
        let chats=await chat.find()
        console.log(chats);
        res.render("index.ejs",{chats});
    })
    // async function main() {
    //   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    
    // }
      // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    
    
//     let chat1=new chat({
//         from:"neha",
//         to:"sneha",
//         msg:"I am a looser",
//         Created_at:new Date()
    
//     })
//     chat1.save().then((res)=>{
//         console.log(res);
//     })
// })
app.listen(8080,()=>{
    console.log("server is listening to port 8080")
})