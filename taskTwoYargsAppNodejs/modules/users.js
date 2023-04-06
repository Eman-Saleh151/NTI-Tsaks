const { argv } = require("yargs");
const deal= require("./dealWithJson");
const userHeads = ["id","name" , "email","age"]

const createObj=(data)=>{
    const userData ={}
    userHeads.forEach(h=>{
        if(h=="id") userData[h] =Date.now()
        else userData[h] =data[h]
    })
    return userData
}
class User{
    static addUser =(argv) =>{
        const userData= createObj(argv)
        const data = deal.readJsonData("users.json")
        data.push(userData);
        deal.writeJsonData("users.json",data)
    }
    static showAll =()=>{
        const allUsers=deal.readJsonData("users.json")
        if(!allUsers.length){
            console.log("no users")
            return
        }
        allUsers.forEach((user,inx)=>{
            console.log(`${inx+1} - ${user.name} - ${user.email} - ${user.age}  - ${user.id}`);
        })

    }
    static showSingleUser =(argv)=>{
        const allUsers = deal.readJsonData("users.json")
        const singleUser = allUsers.find(user=> user.id == argv.id)
        if(!singleUser) console.log("no user with this id")
        else console.log(singleUser)
    }
}

module.exports= User;