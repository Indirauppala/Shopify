const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming 'User' is the correct name in your models directory

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON request body

const url = "mongodb://localhost:27017/mernapp";

mongoose.connect(url)
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("server listening on port 3000");
    });
  })
  .catch((err) => console.log(err));

app.get('/',async(req,res)=>{
    const user=await User.find()
    res.json(user)
})

app.post('/api/users', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      return res.status(200).json({ msg: "Login successful" });
    } else {
      return res.status(401).json({ msg: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});
app.post('/api/users/create',async(req,res)=>{
    const userData=new User(req.body)
    const savedUser=await userData.save();
    res.status(200).json(savedUser)
})

app.put('/api/user/update',async(req,res)=>{
  try{
    const {email,newpassword}=req.body;
    const user=await User.findOne({email});
    if(!user){
        res.status(404).json({msg:"Email not found"})
    }
    const updateUser=await User.findOneAndUpdate(
      {email},
      {password:newpassword},
      {new:true}
    )
    res.status(200).json({msg:"Password updated successfully"})
    }
  catch(error){
      res.status(500).json({msg:"server error"})
  }
})
