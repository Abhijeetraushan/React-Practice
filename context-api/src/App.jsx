import './App.css'
import UserContextProvider from '../context/UserContextProvider'
import Login from '../components/Login'
import Profile from '../components/Profile'

function App() {

  return (
    <div>
      <h1>Hello World</h1>
    
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    </div>
  )
}

export default App
