import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [phone,setPhone]=useState();
  const navigate=useNavigate()


  const handleRegister=(e)=>{
    e.preventDefault()

    const data={name,email,password,phone}

    fetch('http://localhost:3000/api/users/create',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)  
    }).then((res)=>res.json())
    .then((data)=>{
        console.log('registration success',data);
        navigate('/')
    })
    .catch((err)=>console.log(err))
    
  }
  return (
    <div className='register_wrapper'>
      <div className='register'>
      <h1>Hello,Register Here</h1>
      <form onSubmit={handleRegister}>
        <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder=' Enter name'/>
        <br/>
        <br/>
        <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
        <br/>
        <br/>
        <input type='text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
        <br/>
        <br/>
        <input type='text' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter phone number'/>
        <br/>
        <br/>
        <button type='submit' style={{ backgroundColor: "#007bff"}}>Register</button>
      </form>
      </div>
    </div>
  )
}

export default Register
