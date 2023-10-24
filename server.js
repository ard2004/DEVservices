const express = require("express")
const app = express()
const PORT = process.env.PORT ?? 5001

//-----------------------checksum------------------
const crypto = require('crypto')
function calculateCheckSum(data){
  const hash = crypto.createHash('sha256')
  hash.update(data)// 2. updates the hash object with the data
  return hash.digest('base64')// 3. return the digest in the form of base64. Can also send in 'binary', 'hex' etc.
  /*
   * 1. hash-: a object is created so that a digest can be created (plate for the digest ;) 
   * */
}
//-----------------------checksum------------------



//-----------------------fetching doc--------------
const fs = require('fs')
let file = fs.readFileSync('/run/media/roshan/codebox/webWeek/index.html','utf8')
//-----------------------fetching doc--------------



//-----------------------checking for changes-----------
let oldFileSum = calculateCheckSum(file)
let newFileSum = calculateCheckSum(file)
app.get('/',(req,res)=>{
  setInterval(()=>{
    file = fs.readFileSync('/run/media/roshan/codebox/webWeek/index.html','utf8')
    newFileSum = calculateCheckSum(file)
    console.log("New file sum: "+newFileSum)
    console.log("old file sum: "+oldFileSum)
    if (newFileSum != oldFileSum){
      console.log("A new change has been detected!")

      res.sendFile('/run/media/roshan/codebox/webWeek/index.html')
      oldFileSum = calculateCheckSum(file)
    }
  },1000)
  res.sendFile('/run/media/roshan/codebox/webWeek/index.html')
})
//-----------------------checking for changes------------
app.listen(PORT,()=>{
   console.log(`http://localhost:${PORT}`)   
})
