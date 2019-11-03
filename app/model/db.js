// 连接数据库

var mongoose = require('mongoose')

// useNewUrlParser 升级4.0前可以不指定，升级后必须要指定

mongoose.connect('mongodb://127.0.0.1:27017/eggTable', {useNewUrlParser: true}, function(err) {
    if(err) {

        console.log(err)
        return
    }
    console.log('连接数据库成功')
})

module.exports = mongoose