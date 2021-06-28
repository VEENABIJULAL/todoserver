const express=require('express');
const session=require('express-session');
const cors=require('cors');
const dataservice=require('./services/data.service');
const app=express();

app.use(session({
    secret:'randomsecurestring',
    resave:false,
    saveUninitialized:false
}))
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}))

app.use(express.json());



app.post('/add',(req,res)=>{

    dataservice.add(req,req.body.todo)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
})
app.post('/view',(req,res)=>{
    dataservice.view()
    .then(result=>{
        //console.log(res.json(result));
        res.status(result.statuscode).json(result)

    })
})

app.listen(3000,()=>{
    console.log("server created at port 3000");
})