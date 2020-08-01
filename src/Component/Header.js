import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link, useHistory} from "react-router-dom";

function Header({backButton}) {

    const history = useHistory();

    return (
        <div>
            <div className="header">
                {
                    backButton ? 
                    <IconButton onClick={()=>history.replace(backButton)}>
                        <ArrowBackIosIcon className="headerIcon" fontSize="large"/> 
                    </IconButton>
                    :
                    <Link to="/me">
                        <IconButton>
                            <PersonIcon className="headerIcon" fontSize="large"/> 
                        </IconButton>
                    </Link>
                }
                
                    <Link to="/">
                    <img className="headerLogo"
                        src="https://i.pinimg.com/564x/36/86/82/368682c58984186b516cc255148e0f6b.jpg" 
                        alt="logo"
                    />
                    </Link>
                    <Link to="/chat">
                        <IconButton>
                            <ForumIcon className="headerIcon" fontSize="large"/>
                        </IconButton>
                </Link>
            </div>           
        </div>
    );
}

export default Header;