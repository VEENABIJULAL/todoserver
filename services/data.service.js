const db=require('./db');
let currentuser;
accountdetails={
    1000: {uid:1000, username:"userone", password:"userone",todos:[]},
    1001: {uid:1001, username:"usertwo", password:"usertwo",todos:[]},
    1002: {uid:1002, username:"userthree", password:"userthree",todos:[]},
    1003: {uid:1003, username:"userfour", password:"userfour",todos:[]},
  }
  const login=(req,uid,password)=>{
    var uid=parseInt(uid);
    console.log(password);
    return db.User.findOne({uid,password})
.then(user=>{

  if(user){
    req.session.currentuser=user;
    console.log(user);
    return{
      statuscode:200,
      status:true,
      message:"login success",
      name:user.username,
      userid:user.uid
     }
    }
    else{
      return{
        statuscode:422,
        status:false,
        message:"invalid account"
       }
    }
  })
  }
  const register=(uname,uid,pswd)=>{
    return db.User.findOne({uid})
    .then(user=>{
     
      if(user){
        return{
          statuscode:422,
          status:false,
          message:"user exist ..please login"
        }
      }
      else{
        const newUser=new db.User({
            uid,
            username:uname,
            password:pswd
          })
        //  this.savedetails()
        newUser.save();
          return{
            statuscode:200,
            status:true,
            message:"successfully registered"
          }
        }
      })
    }
const add=(req,uid,todo)=>{
      console.log(uid);
        return db.User.findOne({uid})
        .then(user=>{
          if(!user){
            return{
              statuscode:422,
              status:false,
              message:"Failed to save"
             }
            }
           
            else{
            
              user.todos.push(todo)
              console.log(user.uid);
              user.save();
              return{
                statuscode:200,
                status:true,
                message:"Event saved successfully"
               }
      
            }
          })
        }
        const view=(uid)=>{
          //console.log(uid);
            return db.User.findOne({uid})
            .then(user=>{
              if(!user){
                return{
                  statuscode:422,
                  status:false,
                  message:"Error"
                 }
                }
               
                else{
                return{
                    statuscode:200,
                    status:true,
                    message:user.todos
                   }
          
                }
              })
            }

 module.exports={
            register,
            login,
            add,
            view
        }