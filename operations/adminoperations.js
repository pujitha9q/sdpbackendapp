const  Admin = require("../models/Admin")
const User = require("../models/User")


const adminlogin = async (request, response) => 
{
   try 
   {
     const input = request.body
     const admin = await Admin.findOne(input)
     response.json(admin)
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };

 const viewuser = async (request, response) => 
 {
    try 
    {
      const user= await User.find();
      if(user.length==0)
      {
        response.status(200).send("DATA NOT FOUND");
      }
      else
      {
        response.json(user);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const deleteuser = async (request, response) => 
  {
     try 
     {
       const email = request.params.email
       const user = await User.findOne({"email":email})
       if(user!=null)
       {
         await User.deleteOne({"email":email})
         response.status(200).send("User Deleted Successfully")
       }
       else
       {
         response.status(200).send("User Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
 
 

 module.exports = {adminlogin,viewuser,deleteuser}