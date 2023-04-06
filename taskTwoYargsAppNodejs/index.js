const yargs =require("yargs");
const  user = require("./modules/users")
// const deal= require("./modules/dealWithJson");

// deal.writeJsonData("data.json",data);
// console.log(deal.readJsonData("data.json"));
yargs.command({
    command:"addUser",
    builder:{
        name:{ demandOption: true},
        email:{ demandOption: true},
        age:{ demandOption: true}
    },
    handler:(argv)=>{
        user.addUser(argv)
    }
})

yargs.command({
    command:"showAllUsers",
    handler:()=> user.showAll()
})

yargs.command({
    command:"showSingleUser",
    builder:{id:{demandOption:true}},
    handler:(argv)=>user.showSingleUser(argv)
})

yargs.argv



