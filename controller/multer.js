const express = require('express')
const multer  = require('multer')




const app = express()
 
const fileupload=  (req, res, next)=> {
  console.log(req);
};


module.exports = fileupload;
