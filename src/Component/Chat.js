import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css';
import {Link} from 'react-router-dom';

function Chat({name,message,timestamp,profilePic}) {
    return (
        <Link to={`/chat/${name}`}>
        <div className="chat">
            <Avatar className="image" src={profilePic} alt={name}/>
            <div className="details">
                <h2>{name}</h2>
                <p>{message}</p>

            </div>
            <p className="timestamp">{timestamp}</p>
        </div>
        </Link>
    );
}

export default Chat;