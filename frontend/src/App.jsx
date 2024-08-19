import { useState } from 'react'
import './App.css'
import Authpage from './Authpage'
function App() {
  const [user, setUserValid] = useState(undefined)
if(user){
  return <Chatspage user = {user}/>;
}else{
  return <Authpage onAuth = {(user)=>setUserValid(user)} user = {user}/>;
}

}

export default App
