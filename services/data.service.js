const db=require('./db');
let currentuser;
// accountdetails={
//     todos:[]
//   }
 
  const add=(req,todo)=>{
    console.log(todo);
    return db.User.findOne({})
    .then(user=>{
      if(user){
        user.todos.push({todo:todo})
        user.save();
        return{
          statuscode:200,
          status:true,
          message:"Event saved successfully"
         }
        
      }
      else{
        return{
          statuscode:422,
          status:false,
          message:"todo exist",
          
        }
      }
    })
  }
         
        const view=(req)=>{
          //console.log(uid);
            return db.User.findOne({})
            .then(user=>{
              if(user){
                console.log(user["todos"]);
                return{
                  
                  statuscode:200,
                  status:true,
                  message:user["todos"]
                 }
                
                }
               
                else{
                //  console.log(user["todos"]);
                  return{
                    statuscode:422,
                    status:false,
                    message:"Error"
                   }
                
          
                }
              })
            }

 module.exports={
            add,
            view
        }