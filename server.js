const express = require("express")
const app = express()
const PORT = process.env.PORT ?? 8001;
const test_route = require("./routes/test_route")
const upload_route = require("./routes/upload_route")
app.use('/test',test_route)
// app.get('/test',(req,res)=>{
//   res.sendStatus(200)
// })
app.get('/',(req,res)=>{
  res.sendFile(`${__dirname}/index.html`)
})
app.listen(PORT,()=>{
  console.log(`dev Host up at http://localhost:${PORT}`)
})
