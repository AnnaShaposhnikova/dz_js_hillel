// console.log(logger)
// const { sayHello } = require("./logger.js")
const { ajaxPrefilter } = require("jquery")
const logger = require("./log/logger.js")
logger.sayHello("myName")



const calculator = require("./help-functions");
console.log(calculator.add(2,3))

// const { application } = require('express');
// const express = require('express');

// const app = express();node api.js

// const PORT = 3001;
// app.listen(PORT,()=>{
//     console.log('hello!')
// })