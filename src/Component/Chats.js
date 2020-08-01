import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats(props) {
    
    return (
        <div className="chats">
            <Chat 
                name="Jack Daniels"
                message="Just one drink bro"
                timestamp="3 minutes ago"
                profilePic="https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
            <Chat 
                name="Bacardi"
                message="be free this weekend"
                timestamp="5 minutes ago"
                profilePic="https://images.unsplash.com/photo-1561150169-371f366b828a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
            <Chat 
                name="Jose Cuervo"
                message="Com'on!!! lets have one"
                timestamp="2 hours ago"
                profilePic="https://images.unsplash.com/photo-1516535794938-6063878f08cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
            <Chat 
                name="Mythos"
                message="its hot bro, lets have a chilled pint"
                timestamp="4 hours ago"
                profilePic="https://images.unsplash.com/photo-1509404969887-525aab7cc41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            />
            <Chat 
                name="Ballantines"
                message="when r we meeting up bruhh"
                timestamp="4 hours ago"
                profilePic="https://images.unsplash.com/photo-1552682561-932a0db0d2d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            />
            <Chat 
                name="Barter House"
                message="long time no see"
                timestamp="2 days ago"
                profilePic="https://images.unsplash.com/photo-1585703164392-171d7f8a0af5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            />
            
        </div>
    );
}

export default Chats;