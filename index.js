const express=require('express');
const app=express();

app.use(express.json());

app.post('/login',(req,res)=>{
    console.log(req.body);
    dataservice.login(req,req.body.id,req.body.pswd)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
})

app.listen(3000,()=>{
    console.log("server created at port 3000");
})