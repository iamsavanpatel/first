const express=require("express")
const app=express()
const path=require("path")
const serve= require("express-static");

app.set("view engine","ejs")
 
// app.use("/",(req,res,next)=>{
//     // res.write("This is Forst Middleware")
//     // res.end()
//     res.write("This M1")
//     // res.end()
//     next()
// })

// app.use(express.static("public"))
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname,"./public")))
// const static_path = path.join(__dirname,'/public');
// app.use(express.static(static_path));

app.get("/first",(req,res)=>{
    res.render("first",{
        name:"savan",rollno:58
    })

})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"home.html"));
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"conatct.html"));
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"about.html"));
})


app.listen(9000,()=>{
    console.log("started!");
})

