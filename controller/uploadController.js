const { urlencoded } = require("body-parser")
const os = require('os')
const express = require("express")
const app = express()
const multer = require("multer")
app.use(urlencoded({extended:false}))
const storeHandle = async(req,res)=>{
  console.log("=================\nuser has submitted the file\n===============")
  const storage = multer.diskStorage({
    destination: function(req,file,callBack){
      return callBack(null,`${os.homedir()}/Documents`)
    },
    filename: function(req,file,callBack){
      return callBack(null,`${file.originalname}`)
    }
  })
  const upload = multer({storage})
  res.sendStatus(500)
}
module.exports = {storeHandle}
