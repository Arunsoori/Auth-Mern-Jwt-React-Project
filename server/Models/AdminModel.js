const mongoose = require ("mongoose")
const bcrypt = require("bcrypt")
const adminSchema = new mongoose.Schema({
email:{
    type:String,
    required :[true,"Email is required"],
    unique:true,
},
password:{
    type:String,
    required :[true,"Password is required"],
    

},

})




adminSchema.statics.login = async function (email,password) {
    // console.log(email,"lllllllllll");
    const admin = await this.findOne({email})
    // console.log(user,"uuuuuuuuu");
    if(admin) {
        
        const auth = await bcrypt.compare(password,user.password)
        
    
    if (auth){
        return admin;
    }
     throw Error("Password incorrect")
}
throw Error("Email incorrect")

}

module.exports = mongoose.model("Admins", adminSchema)