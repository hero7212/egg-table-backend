'use strict';
var StudentsModel = require('../model/students');
var students = new StudentsModel();


const Controller = require('egg').Controller;

class HomeController extends Controller {
  

  async index() {
    const { ctx } = this;
    // await StudentsModel.find({},(err, doc) => {
    //   ctx.body = doc;
    // })

    await StudentsModel.find({},(err,docs) => {
      ctx.body = docs
    }).sort({'_id':-1}).limit(10)
    
  }
}

module.exports = HomeController;
