const taskModel =require("../../db/models/task.model")
const ObjectId = require("mongodb").ObjectId
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
    static addLogic = async(req,res)=>{
        try{
                const data = new taskModel(req.query)
                await data.save()
                res.redirect("/showAll")
        }
        catch(e){
            res.send(e)
        }  
        
    }
    static showAll = async(req, res)=>{
        try{
            const allTasks = await taskModel.find()
            res.render("showAll", {
                pageTitle:"showAll Data", 
                allTasks,
                hasData: allTasks.length
            })
        }
        catch(e){
            res.send(e)
        }
        
    }

    static single = async(req,res)=>{
        try{
            const task = await taskModel.findById(req.params.id)
            res.render("single", {
                pageTitle:"Single Data",
                task
            })
        }
        
        catch(e){
            res.send(e)
        }
    }

    static del = async(req,res)=>{
        try{
            await taskModel.findByIdAndDelete(req.params.id)
            res.redirect("/showAll")
        }
        catch(e){
            res.send(e)
        }
    }
    static delAll = async(req,res)=>{
        try{await taskModel.deleteMany()
            res.redirect("/showAll")}
            catch(e){
                res.send(console.log(e.massage))
            }
    }

    static edit =async(req,res)=>{
        try{
            const task = await taskModel.findById(req.params.id)
            res.render("edit", {
                pageTitle:"edit Data",
                task
            })
        }
        
        catch(e){
            res.send(e)
        }
    }
    static editLogic =async (req,res)=>{
        try{
            const task = await taskModel.findOneAndUpdate(req.params.id,req.query ,{runValidators:true})
            res.redirect("/showAll")
        }
        catch(e){
            res.send(e)
        }
    }
    static search = async(req,res) =>{
        try{
            let search = req.query.search;
            connectDb(async(db)=>{
                // const results = await db.collection("Tasks").find({title:{$regex:search}} ).toArray()
                const results = await taskModel.find({ $or: [ { title:{$regex:search} }, { content: {$regex:search}} ] } ).exec()
                res.render("search", {
                        results,
                        hasData: results.length
                    })
            })

        }
        catch(e){
            console.log(e.massage);
        }
       
    }

    // static status = (req, res) => {
    //     const allTasks = deal.readJsonData(fileName)
    //     const id = req.params.id
    //     const index = allTasks.findIndex(t => t.id == id)
    //     // const status = allTasks[index].status
    //     // console.log(status)
    //     if(allTasks[index].status==false){
    //         allTasks[index].status==true
    //         // console.log( allTasks[index].status)
    //         deal.writeJsonData(fileName,allTasks)
    //         res.redirect("/showAll")
    //     }
    // }
     
    }
   


module.exports = Task