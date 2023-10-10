const express = require("express")
const app = express()
const PORT = process.env.PORT ?? 5001
app.get('/',(req,res)=>{
    // let time = parseInt((Date.now()/1000)%(Math.pow(10,1))) 
    // res.setHeader('_differentiator_',(time%2==0))
    res.setHeader("http-equiv","Refresh")
    res.setHeader("content","60")
    res.sendFile(`/run/media/roshan/codebox/webWeek/index.html`)
})
app.listen(PORT,()=>{
   console.log(`http://localhost:${PORT}`)   
})
