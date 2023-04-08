const connectDb =require("../../models/dbConnect")
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
            connectDb(async(db)=>{
                const task={title:req.query.title,content:req.query.content, dueDate:d,status:false}
                // console.log(Tasks)
                await db.collection("Tasks").insertOne(task)
                res.redirect("/showAll")
            })
        }
        catch(e){
            res.send(e)
        }  
        
    }
    static showAll = (req, res)=>{
        try{
            connectDb(async(db)=>{
                const allTasks = await db.collection("Tasks").find().toArray()
                res.render("showAll",{
                    pageTitle:"showAll Data",
                    allTasks,
                    hasData: allTasks.length
                })
            })
        }
        catch(e){
            res.send(e)
        }
        
    }

    static single =(req,res)=>{
        try{
            connectDb(async(db)=>{
                const task = await db.collection("Tasks").findOne({
                    _id: new ObjectId(req.params.id)
                })
                res.render("single", {
                    pageTitle:"Single Data",
                    task
                })
                
            })
        }
        catch(e){
            res.send(e)
        }
    }

    static del = async(req,res)=>{
        try{
            connectDb( async(db) => 
                await db.collection("Tasks")
                .deleteOne({_id: new ObjectId(req.params.id)}) 
                )
            res.redirect("/showAll")
        }
        catch(e){
            res.send(e)
        }
    }
    static delAll = async(req,res)=>{
        try{
            connectDb( async(db) => await db.collection("Tasks").remove() )
            res.redirect("/showAll")
        }
        catch(e){
            res.send(e)
        }
    }

    static edit =async(req,res)=>{
        try{
            connectDb(async(db)=>{
                const task = await db.collection("Tasks").findOne({
                    _id: new ObjectId(req.params.id)
                })
                res.render("edit", {
                    pageTitle:"Edit Data",
                    task
                })
                
            })
        }
        catch(e){
            res.send(e)
        }
    }
    static editLogic = (req,res)=>{
        try{
            connectDb(async(db)=>{
                const id = req.params.id
                await db.collection("Tasks").updateOne(
                    { _id: new ObjectId(id) },
                    { $set: { ...req.query } }
                )

                res.redirect("/showAll")
            })
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
                const results = await db.collection("Tasks").find({ $or: [ { title: { $regex:search } }, { content: { $regex:search }} ] } ).toArray()
                res.render("search", {
                        results,
                        hasData: results.length
                    })
            })

        }
        catch(e){
            console.log(e.massage);
        }
        // let search = req.query.search;
        // let results = [];
        // const allTasks = deal.readJsonData(fileName)

        // for (var i = 0; i < allTasks.length; i++) {
        //     if (allTasks[i].title.includes(search) || allTasks[i].content.includes(search)) {
        //         results.push(allTasks[i])
        //     }
        // }
        // res.render("search", {
        //     results,
        //     hasData: results.length
        // })
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