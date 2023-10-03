const express = require("express")
const os = require('os')
const router = express.Router()
router.get('/',(req,res)=>{
  console.log("===============\nuser on home route\n=================")
  res.sendFile(`${os.homedir()}/share/index.html`)
})
module.exports = router;
