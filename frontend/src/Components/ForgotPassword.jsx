import React, { useState } from 'react'

const ForgotPassword = () => {
    const [email,setEmail]=useState('')
    const [newpassword,setNewPassword]=useState('')
    const[confirm,setConfirm]=useState('')
    const [message,setMsg]=useState('')
    
    const submitHandler=(e)=>{
        e.preventDefault()
        if(newpassword==confirm){
            console.log("password changed")
            fetch('http://localhost:3000/api/user/update',{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email,newpassword})  
            }).then((res)=>res.json())
            .then((data)=>{
                setMsg(data.msg)
            })
            .catch((err)=>console.log(err))
        }
        else{
            console.log("please enter correct password")
        }
    }
  
    return (
    <div className='register_wrapper'>
    <div className='register'>
        <h1>Change Password</h1>
        <form onSubmit={submitHandler}>
      <input type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <br/>
      <input type='text' placeholder='enter password' value={newpassword} onChange={(e)=>setNewPassword(e.target.value)}/>
      <br/>
      <br/>
      <input type='text' placeholder='confirm password' value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
      <br/>
      <br/>
      <button type='submit' style={{ backgroundColor: "#007bff"}}>submit</button>
      <br/>
      <p>{message}</p>
      </form>
    </div>
    </div>
  )
}

export default ForgotPassword
