const {register , login, uploadImage } = require ("../Controllers/AuthControllers")
const { checkUser } = require("../Middlewares/Authmiddleware")
const {uploadFile} = require ('../Middlewares/multer')

const router = require("express").Router()

router.post("/",checkUser)
router.post("/register",register)
router.post("/login",login)
router.post("/uploadimage",uploadFile.single('image'),uploadImage)


module.exports = router;
