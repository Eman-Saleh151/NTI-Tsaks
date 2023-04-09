require("../db/dbConnect")
const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
//
const myPartialDir = path.join(__dirname, "../resources/layouts")
const myStaticDir = path.join(__dirname, "../resources/public")
const myViewsDir = path.join(__dirname, "../resources/views")
//
app.use(express.static(myStaticDir))
app.set("view engine", "hbs")
app.set("views", myViewsDir)
hbs.registerPartials(myPartialDir)
//
const taskRoutes = require("./routes/task.routes")
app.use(taskRoutes)
//
app.all("*", (req,res)=> res.render("err404", { pageTitle:"Error in page"} ) )



module.exports = app