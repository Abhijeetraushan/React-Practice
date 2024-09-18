import React,{useContext} from 'react'
import UserContext from '../context/UserContext';


const Profile = () => {

    const {user}=useContext(UserContext);
  
    if(!user) return<h1>please login</h1>

    return <h1>Welcome back {user}</h1>
}

export default Profile