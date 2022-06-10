import React, {useState} from 'react'
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
async function loginUser(event) {
  event.preventDefault()
const response = await fetch('http://localhost:3001/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
const data = await response.json()
 if (data.user) {
    localStorage.setItem('token', data.user)
    alert('Login successful')
    window.location.href = "//localhost:4000/"
  }
   else
   {
    alert('Please check your username and password')
  }
}
  return (
    <React.Fragment>

          <div className="signup-box"  style={{backgroundColor:"#c4d70f",height:"620px", clipPath: " polygon(0 0,100% 0,100% 75%,0 100%)"}} >
          <h1 style={{paddingTop:"80px"}}>Hello...</h1>
          <h4><br />Login</h4>
          <form onSubmit={loginUser}>
             
              <label><br />Email</label><br />
              <input type="email" autoComplete='off' name='email'value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" style={{borderColor:"white"}}/><br />
              <label><br />Password</label><br />
              <input type="password"  autoComplete='off' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" style={{borderColor:"white"}}/><br /><br />
             {/* <input type="button" onClick={handleClick} value="Submit" style={{borderColor:"white"}}/> */}
             <div><button style={{borderColor:"white"}}>Sign in</button></div> 
              
              
          </form>
          <p><br />
              If you doesn't have an account then <Link to= "/signup">Sign Up
              </Link>    <br />
              <a href="/">Terms and Condition</a> and <a href="/">Policy Privacy</a>
          </p>
          </div>
          </React.Fragment>
         
  );
 
}
export default Login;
