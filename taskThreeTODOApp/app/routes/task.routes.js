const taskController=require("../controller/taskController")
const router = require("express").Router()

router.get("/",taskController.home)

router.get("/add",taskController.addTask)
router.get("/addLogic",taskController.addLogic)
router.get("/showAll",taskController.showAll)

router.get("/single/:id",taskController.single)
router.get("/del/:id",taskController.del)
router.get("/delAll",taskController.delAll)

router.get("/edit/:id",taskController.edit)
router.get("/editLogic/:id",taskController.editLogic)

router.get("/status/:id",taskController.status)

router.get("/search",taskController.search)























module.exports=router