const { home,deleteUser,updateUser,AdminLogin} = require ("../Controllers/AdminControllers")
const { register} = require ("../Controllers/AuthControllers")

const { checkAdmin } = require("../Middlewares/Adminmiddleware")
// const {uploadFile} = require ('../Middlewares/multer')

const router = require("express").Router()




router.post("/checkadmin",checkAdmin)

router.get("/",home)
router.get("/adduser",register)
router.post("/deleteuser/:id",deleteUser)
router.post("/edit",updateUser)
router.post("/adminlogin",AdminLogin,)




// router.post("/register",register)
// router.post("/login",login)
// router.post("/uploadimage",uploadFile.single('image'),uploadImage)


module.exports = router;
