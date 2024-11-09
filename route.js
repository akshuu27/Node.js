const express= require('express').Router()
const route= require('express').Router()
const userModule=require('./module')

const{registervalidation, loginvalidation}=require('./validation')
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')

//  Shcema(resgister data)
route.post('/register',async(req ,res)=>{

     const{error}= registervalidation(req.body)
     if(error) return res.status(404).send(error.details[0].message)


       const emailExist = await userModule.findOne({email: req .body.email})
       if(emailExist) return res.status(404).send("Email already exists")

        const salt =await bcrypt.genSalt(10);
        const hashpassword= await bcrypt.hash(req.body.password,salt)

        
    const newUser=new userModule({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        password:hashpassword
    })
    try{
         const SaveData=await newUser.save()
         res.send(SaveData)
    } catch(error){
      console.log(error);

    }
})

//   login 
   route.post("/login", async(req , res)=>{
    const{error}= registervalidation(req.body)
    if(error) return res.status(404).send(error.details[0].message)

  

//  email

      const userExist = await userModule.findOne({email: req .body.email})
      if(!userExist) return res.status(400).send("Invalid email id")

        const ispass = await bcrypt.compare(req.body.password, userExist.password)
        if(!ispass) return res.status(400).send("Invalid password")

          const token = jwt.sign({_id :userExist._id}, process.env.token_secret)
          res.header('auth-token',token).send(token)

          res.send("login successfull")
   })


  
  

// showdata
route.get("/showData", async(req, res)=>{
  try{
     const showData=await userModule.find()
     res.send(showData)
  }catch(error){
     console.log(error);
  } 
})

// showone 

route.get("/showOne" , async(req, res)=>{
  const id = req.query.id
  try{
      const  showOne= await userModule.findById(id)
      res.send(showOne)
  }catch(error){
       console.log(error);
  }
})

  
// delete api 

route.delete("/delete", async(req,res)=>{
  let id= req.query.id
  try{
    const deleteData =await userModule.findByIdAndDelete(id);
    res.send('Delete Data successfully');
  } 
  catch(error){
  console.log(error);

  }
})

//   update 
route.post("/update", async(req,res)=>{
  let _id= req.body._id
  try{
      const updateData =await userModule.findByIdAndUpdate(_id, req.body)
      res.send("Data updated")
  }catch(error){
      console.log(error);
  }
})
module.exports= route;