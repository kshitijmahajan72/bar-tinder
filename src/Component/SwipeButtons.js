import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
function SwipeButtons(props) {
    return (
        <div className="swipeButtons">
            <IconButton onClick={()=>window.location.reload(false)}  className="repeat">
                <ReplayIcon  fontSize="large"/>
            </IconButton>
            
            {/* <IconButton className="star">
                <StarRateIcon fontSize="large"/>
            </IconButton> */}
            
            <IconButton href="https://www.instagram.com/kshitij________/" target="_blank" className="right">
                <FavouriteIcon fontSize="large"/>
            </IconButton>
            <IconButton href="http://resume-react.s3-website.ap-south-1.amazonaws.com/" target="_blank" className="lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    );
}

export default SwipeButtons;