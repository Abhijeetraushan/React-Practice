import React, { useState ,useContext} from 'react'
import UserContext from '../context/UserContext';

const Login = () => {

    const [username,setUsername]=useState("");
    const  [password,setPassword]=useState("")
    const {setUser,user}=useContext(UserContext)

    function handleClick(e)
    {
        e.preventDefault();
        setUser(username);
    }

  return (
    <div>
        <h1>Login</h1>
        <input onChange={(e)=>setUsername(e.target.value)} value={username} type='text' placeholder='username' />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type='text' placeholder='password' />
        <button onClick={handleClick} type='submit'>submit</button>
    </div>
  )
}

export default Login