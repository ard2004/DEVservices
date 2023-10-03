const express = require("express")
const app = express()
const router = express.Router()
// const {upload_files} = require(`../controller/uploadController.js`)
// router.route('/upload').post(upload_files)
router.get('/',(req,res)=>{
  res.sendStatus(200)
})

module.exports = router;

