'use strict';
var StudentsModel = require('../model/students');

const Controller = require('egg').Controller;

class AddController extends Controller {
  
  async index() {
    const { ctx } = this;
    console.log(ctx.request.body)
    var students = new StudentsModel(ctx.request.body)
    await students.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            ctx.body = {
                code: '0',
                msg: 'ok'
            }
        }
        
    })
    ctx.body = {
        code: '0',
        msg: 'ok'
    }
  }
}

module.exports = AddController;
