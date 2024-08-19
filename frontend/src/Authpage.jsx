import React from "react";
import axios from "axios";
function Authpage(props){

function getUser(event){
    event.preventDefault();
    const { value } = e.target[0];
    console.log(value);
    axios.post("http://localhost:3000/auth",{username : value})
    .then(res => props.onAuth({...res.data,secret : value}))
    .catch(err=>console.log(err));
}


    return(<div>
        <form onSubmit = {getUser}>
            <div>Welcome </div>
            <div >Set a username to get started</div>
            <input type="text"  name="username" placeholder="Name" value = {username}/>
            <button  type="submit">Sumbit</button>
        </form>
    </div>)
}

export default Authpage;