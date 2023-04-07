const deal =require("../helper/dealWithJson")
const fileName="models/user.json"
var d = new Date();

class Task{
    static home = (req,res)=>{
        res.render("home",{
            pageTitle:"home Data"
        })
    }
    static addTask = (req,res)=>{
        res.render("add",{
            pageTitle:"Add Data"
        })
    }
    static addLogic = (req,res)=>{
  
        const allTasks= deal.readJsonData(fileName)
        const newTask = {id:Date.now(), ...req.query, dueDate:d,status:false}
        allTasks.push(newTask)
        deal.writeJsonData(fileName,allTasks)
        res.redirect("/showAll")
    }
    static showAll = (req, res)=>{
        const allTasks= deal.readJsonData(fileName)
        res.render("showAll",{
            pageTitle:"showAll Data",
            allTasks,
            hasData: allTasks.length
        })
    }

    static single =(req,res)=>{
        const id =req.params.id
        const allTasks = deal.readJsonData(fileName)
        const task = allTasks.find(t=>t.id == id)
        res.render("single",{
            pageTitle: "single Data",
            task
        })
    }

    static del = (req,res)=>{
        let alltasks=deal.readJsonData(fileName)
        const id = req.params.id
        alltasks = alltasks.filter(t=> t.id != id)
        deal.writeJsonData(fileName, alltasks)
        res.redirect("/showAll")
    }
    static delAll = (req,res)=>{
        deal.writeJsonData(fileName, [])
        res.redirect("/showAll")
    }

    static edit =(req,res)=>{
        const id =req.params.id
        const allTasks = deal.readJsonData(fileName)
        const task = allTasks.find(t=>t.id == id)
        res.render("edit",{
            pageTitle: "edit Data",
            task
        })
    }
    static editLogic = (req,res)=>{
        const id = req.params.id
        const allTasks=deal.readJsonData(fileName)
        const index = allTasks.findIndex(t=> t.id == id)
        allTasks[index] = {id, ...req.query, dueDate:d,status:false}
        deal.writeJsonData(fileName, allTasks)
        res.redirect("/showAll")
    }
    static status = (req, res) => {
        const allTasks = deal.readJsonData(fileName)
        const id = req.params.id
        const index = allTasks.findIndex(t => t.id == id)
        const status = allTasks[index].status
        console.log(status)
        if(status==false){
            status==true
            deal.writeJsonData(fileName,allTasks)
            res.redirect("/showAll")
        }
    }
     
    static search = (req, res) => {
        let search = req.query.search;
        let results = [];
        const allTasks = deal.readJsonData(fileName)

        for (var i = 0; i < allTasks.length; i++) {
            if (allTasks[i].title.includes(search) || allTasks[i].content.includes(search)) {
                results.push(allTasks[i])
            }
        }
        res.render("search", {
            results,
            hasData: results.length
        })
    }


    }
   





















module.exports = Task