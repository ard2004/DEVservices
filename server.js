const express = require("express")
const app = express()
const PORT = process.env.PORT ?? 5001
app.get('/',(req,res)=>{
  res.sendFile(`/run/media/roshan/codebox/webWeek/index.html`)
})
app.listen(PORT,()=>{
   console.log(`http://localhost:${PORT}`)   
})
