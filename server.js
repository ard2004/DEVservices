const express = require("express")
const app = express()
const util = require('util')
const PORT = process.env.PORT ?? 8001;
const test_route = require("./routes/test_route")
const upload_route = require("./routes/upload_route")
const home_route = require("./routes/home_route")
app.use('/test',test_route)
app.use('/',home_route)
app.use('/upload',upload_route)
app.get('/',(req,res)=>{
  res.sendFile(`${__dirname}/index.html`)
})
app.listen(PORT,async ()=>{ 
  console.log(`dev Host up at http://localhost:${PORT}`)
})
