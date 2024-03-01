const mongoose = require('mongoose');
const productModel = new mongoose.Schema({
  
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
quntity_available:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        defult:Date.now()
    }
    
})


module.exports = mongoose.model('productModel', productModel);