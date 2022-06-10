
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
function SignUp() {
let navigate = useNavigate()

	const [fname, setName] = useState('')
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
		async function registerUser(event) {
		event.preventDefault()
	const response = await fetch('http://localhost:3001/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fname,
				email,
				password
			}),
		})
  const data = await response.json()
	if (data.status === 'ok') {
			navigate("/login")
		}
    else {
      alert('This email already in use. Use a different email !!')
    }
	}

  return (
    
    <React.Fragment>

          <div className="signup-box"  style={{backgroundColor:"#c4d70f",height:"620px", clipPath: " polygon(0 0,100% 0,100% 75%,0 100%)"}} >
          <h1>Sign Up</h1>
          <h4><br />It's free and only takes a minute</h4>
          <form onSubmit={registerUser}>
              <label><br /> Name</label><br />
              <input type="text"autoComplete='off' value={fname} onChange={(e) => setName(e.target.value)} name='fname' placeholder=""style={{borderColor:"white"}}/><br />
              
              <label><br />Email</label><br />
              <input type="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder="" style={{borderColor:"white"}}/><br />
              <label><br />Password</label><br />
              <input type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} name='password' style={{borderColor:"white"}}/><br />
             <br/>
            <button type="submit" style={{borderColor:"white"}}>Submit</button>
             {/* <input type="button" value="Submit" style={{borderColor:"white"}}/> */}
          </form>
          <p><br />
              By clicking the Sign Up button,you agree to our <br />
              <a href="/">Terms and Condition</a> and <a href="/">Policy Privacy</a>
        
              Already have an account?<Link to= "/login" style={{textDecoration:"none",paddingLeft:"10px"}}>Login
                                            </Link>
          </p>
          </div>
          </React.Fragment>
  );
}
export default SignUp;
