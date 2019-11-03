var mongoose = require('./db.js')

var StudentsSchema = mongoose.Schema({

    name:{
        type:String,
        trim: true,
        require: true
    },
    age:{
        type:Number,
        min:0,
        max:150 //min max只能在number类型
    },
    sex: {
        type: Number
    }
})

module.exports = mongoose.model('Students',StudentsSchema,'students')






