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

app.post('/login',(req,res)=>{
    console.log(req.body);
    dataservice.login(req,req.body.uid,req.body.pswd)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
})
app.post('/register',(req,res)=>{
    dataservice.register(req.body.uname,req.body.uid,req.body.pswd)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
});


app.post('/add',(req,res)=>{

    dataservice.add(req,req.body.uid,req.body.todo)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
})
app.post('/view',(req,res)=>{
    dataservice.view(req.body.uid)
    .then(result=>{
        //console.log(res.json(result));
        res.status(result.statuscode).json(result)

    })
})

app.listen(3000,()=>{
    console.log("server created at port 3000");
})