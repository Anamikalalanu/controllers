const express=require("express")
const dotenv=require("dotenv").config()
const contactRoute=require("./router/contactRoute")
const app=express()
app.use (express.json())
app.use('/api/contact',contactRoute)

const port=process.env.PORT||3000
// app.get('/api/contacts',(req,res)=>{
//     res.status(200).json({"message":"get all contacts"})
// })


app.listen(port,()=>{
    console.log(`server is running....${port}`)
})