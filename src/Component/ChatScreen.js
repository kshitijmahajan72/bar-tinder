import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen({match}) {
    const [input,setInput] = useState("");
    const [messages,setMessages] = useState([
        {
            name: 'Ellen',
            image:'...',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image:'...',
            message: 'How it going!'
        },
        {
            message:"I am good"
        }
    ])

    const handleSend = (e)=>{
        e.preventDefault();
        
        setMessages([...messages,{message:input}]);
        setInput("");
    }

    return (
        
        <div className="chatScreen">
            
            <p className="timestamp">LAST DRANK ON 27/06/2020</p>
            {
                messages.map((message,index)=>(
                    message.name?
                    <div key={index} className="message">
                        <Avatar
                        className="image"
                        alt={message.name}
                        src={message.image}
                        />
                        <p className="text">{message.message}</p>
                    </div>
                    :
                    <div key={index} className="message">
                        <p className="textUser">{message.message}</p>
                    </div>
                ))
            }
            <div >
                <form className="input">
                    <input 
                        className="inputfield"
                        type="text" 
                        placeholder="Type a message" 
                        value={input} 
                        onChange={(e)=>setInput(e.target.value)}
                    />
                    <button type="submit" onClick={handleSend} className="inputButton">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen;