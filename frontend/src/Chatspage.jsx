import React from "react";
import env from "dotenv";
env.config();
import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';
  
    
function Chatspage(props){
    const chatProps = useMultiChatLogic(process.env.SESSION_ID,props.user.username,props.user.secret);
    return <div>
        <MultiChatWindow {...chatProps} />
        <MultiChatSocket {...chatProps} />
    </div>;
}
export default Chatspage;