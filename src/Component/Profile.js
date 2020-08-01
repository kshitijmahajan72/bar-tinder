import React from 'react';
import './Profile.css'


function Profile(props) {
    return (
        <div>
            <div className="profile">
                <img className="image" src="https://images.unsplash.com/photo-1541095516405-05443696210f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="me"/>  
            </div>
            <div className="profile_details">
                <p className="name">Tipsy Bandhu, 23</p>
            </div>
            
        </div>
    );
}

export default Profile;