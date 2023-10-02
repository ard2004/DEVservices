const { urlencoded } = require("body-parser")
const os = require('os')
const express = require("express")
const app = express()
const multer = require("multer")
app.use(urlencoded({extended:false}))
app.use(express.json())
const storeHandle = async(req,res)=>{
  const storage = multer.diskStorage({
    destination: function(req,file,callBack){
      return(null,`${os.homedir()}/Documents`)
    },
    filename: function(req,file,callBack){
      return(null,`${file.originalname}`)
    }
  })
  const upload = multer({storage})
  app.post('/upload',upload.single('fileUpload'),async (req,res)=>{
    console.log("File upload successFully")
    res.sendStatus(200)
  })
  res.sendStatus(200)
}
module.exports = {storeHandle}
