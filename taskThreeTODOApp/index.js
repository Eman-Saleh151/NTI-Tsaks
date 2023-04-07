const app = require("./app/src")
require("dotenv").config()

// //homepage
// app.get("/", (req,res)=>{
//     res.render("home", {pageTitle:"Home Data"})
//     }
// )
// //add
// app.get("/add", (req,res)=>{
//     res.render("add", {pageTitle:"Add Data"})
//     }
// )
// //edit
// app.get("/edit", (req,res)=>{
//     res.render("edit", {pageTitle:"Edit Data"})
//     }
// )
// //showAll
// app.get("/showAll", (req,res)=>{
//     res.render("showAll", {pageTitle:"Show Data"})
//     }
// )
// //single
// app.get("/single", (req,res)=>{
//     res.render("single", {pageTitle:"single Data"})
//     }
// )
// //searchRes
// app.get("/searchRes", (req,res)=>{
//     res.render("searchRes", {pageTitle:"searchRes Data"})
//     }
// )
// //err
// app.get("/err404", (req,res)=>{
//     res.render("err404", {pageTitle:"error"})
//     }
// )
// var d = new Date();
// console.log(d);

app.listen(
    process.env.port,
    ()=> console.log(`http://localhost:${process.env.port}`)
)