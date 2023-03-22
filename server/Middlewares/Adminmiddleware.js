const Admin = require("../Models/AdminModel")
const jwt = require ("jsonwebtoken")


module.exports.checkAdmin= (req,res, next) =>{
    console.log("ppppppppppppppplll");
   
    const token = req.cookies.Ajwt

    console.log(token);
    if (token){
        jwt.verify(token,"kishan sheth super key",async (err,decodedToken)=>{
            if(err){
                res.json({status:false})
        next()
            }else{
                const admin= await Admin.findById(decodedToken.id)
                if (admin) res.json({status : true})
            }
        })

    }else{
        res.json({status:false})
        next()
    }
}