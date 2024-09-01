import React from 'react'
import {  useNavigate } from 'react-router-dom'
const Contact = () => {
    const navigate=useNavigate()
    const submiHandler=()=>{
        alert("message sent")
        navigate('/home')
    }
  return (
    <div>
         <img src="https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139104.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718668800&semt=ais_user" class="d-block w-100" alt="..." style={{height: "800px",width:"80%"}}></img>
        <h1 style={{position: "absolute",top: "15px",left: "50%"}} className="my-5">Contact Us</h1>
      <form style={{top:"30%",left:"48%",position:"absolute"}} onSubmit={submiHandler} className='form'>
          <div className="form-group">
            <label>Name</label>
            <input type="text"className="form-control" placeholder="  Enter your name" style={{height: "40px",width: "350px"}}/>
          </div>
          <div className="form-group">
            <label for="phone">Phone number</label>
            <input type="number" className="form-control" placeholder="**********" style={{height: "40px",width: "350px"}}/>
          </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control"  placeholder="name@example.com" style={{height: "40px",width: "350px"}}/>
        </div>
        <div className="form-group">
          <label for="desc">Description</label>
          <textarea  rows="3" className="form-control" placeholder="why do you want to contact me for" style={{height: "80px",width: "350px"}}></textarea>
        </div>
        <button className="btn btn-primary mt-2" type="submit">submit</button>
      </form>
    </div>
  )
}

export default Contact
