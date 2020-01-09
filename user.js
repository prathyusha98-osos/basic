var mongoose=require('mongoose')

var User = new mongoose.Schema({
    name:{
        type:String
    },
    Password:{
        type:String
    },
    PhoneNumber:{
        type:Number
    }
})


module.exports = mongoose.model('User',User);