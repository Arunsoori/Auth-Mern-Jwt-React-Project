
const UserModel = require("../Models/UserModel")
const AdminModel = require("../Models/UserModel")

const jwt = require("jsonwebtoken")


const maxAge = 3 * 24 * 60 * 60;



const createToken = (id) => {
    return jwt.sign({ id }, "kishan sheth super key", {
        expiresIn: maxAge
    })
}

const handleErrors = (err) => {
    let errors = { email: "", password: "" }
    // console.log(err.message,"eeeeeeeeeeeeee");


    if (err.message === "Email incorrect")
        errors.email = "Email is not registered"

    if (err.message === "Password incorrect")
        errors.password = "password is wrong"



    if (err.code === 11000) {
        errors.email = "Email is already registered"
        return errors;
    }
    if (err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}

module.exports.AdminLogin=async(req,res,next)=>{
    try {
        console.log("in adminlogin");
       
        // console.log(req.body);
        const { email, password } = req.body;
        // console.log(email,"yiyi");
        // console.log(password ,"pipi");
        const admin = await AdminModel.login(email, password)

        const token = createToken(admin._id)
        res.cookie("Ajwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000,


        })
        res.status(200).json({ created: true, jwt: token })
    } catch (err) {
        // console.log(err,"thisone");
        const errors = handleErrors(err)
        // console.log(errors.password,"jjjjjjjjj");
        res.json({ errors, created: false })

    }

}


module.exports.home = async(req,res,next)=>{

    console.log("hom ethiii");
try{
    const userData = await UserModel.find({})
    res.status(201).json({userData, status:true})

} catch (error){
    res.status(422).json({error})
}

}

module.exports.deleteUser = async (req,res,next)=>{

    console.log("controler in");
    const  id = req.params.id
    console.log(id);
     try{
         const deleteduser = await UserModel.findOneAndDelete({_id:id})
       
         res.status(201).json(deleteduser)
     }
     catch(error){
 
         res.status(422).json({error})
     }
 }
 module.exports.updateUser = async (req,res,next)=>{

    console.log("inupdate user function");

    try {
        const {id,name,email} = req.body
        console.log(req.body,"hiiiii")
        const userdata = await UserModel.findOneAndUpdate({_id:id},{$set:{
            name:name,
            email:email
        }}).then(()=>{
            res.status(201).json({status:true,message:"User data edited"})
        })
    } catch (error) {
        console.log(error);
    }

 }
