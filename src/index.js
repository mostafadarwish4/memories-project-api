import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRouter from './routes/posts.js'
import bodyParser from 'body-parser';
const port =process.env.PORT || 5000
const app=express()
app.use(cors())
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))


app.get('/',(req,res)=>{ res.send("Hello to Memories API")})
app.use('/memories',postsRouter)

mongoose.connect(`mongodb+srv://${process.env.mongo_user}:${process.env.mongo_password}@cluster0.xwpqw.mongodb.net/memories?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(port,()=>{
    console.log(`server runs at port ${port}`)})
}
).catch(err=>{
    console.log(err.message)
})
