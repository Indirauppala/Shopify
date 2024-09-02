import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import AuthContext correctly

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use AuthContext correctly
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then((res) => res.json())
    .then((data) => {
      setMessage(data.msg);
      if (data.msg === "Login successful") {
        login(); // Call login from AuthContext
        navigate('/home', { state: { email, password } }); // Navigate to home page
      }
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className="login-wrapper">
    <div className='login'>
      <h1>Hello,</h1>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <input
            type='text'
            value={email}
            name='username'
            placeholder='Enter email address'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            value={password}
            name='password'
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p onClick={()=>navigate('/login/forgetPassword')}>Forgot password..?</p>
        <button type='submit' style={{marginBottom:"10px", backgroundColor:"#007bff"}}>Submit</button>
        <button type='button' style={{ backgroundColor: "#007bff"}} onClick={()=>navigate('/register')}>Signup</button>
      </form>
      <p>{message}</p>
    </div>
  </div>

  );
}

export default Login;
