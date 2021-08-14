import React from "react";
import "./leftbar.css";
import AppsIcon from "@material-ui/icons/Apps";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> < HomeIcon  /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <ExploreIcon /> </div> 
        <div className =  "ListButtonText">Explore</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <SubscriptionsIcon /> </div> 
        <div className =  "ListButtonText">Subscription</div> 
      </div>
      <hr  className = "ListHr" / >
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <VideoLibraryIcon /> </div> 
        <div className =  "ListButtonText">Library</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <HistoryIcon /> </div> 
        <div className =  "ListButtonText">History</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <VideoLabelIcon /> </div> 
        <div className =  "ListButtonText">Your Videos</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>

      <hr  className = "ListHr" / > 

      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>

      <hr className ="ListHr" />

      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>

      <hr className ="ListHr" />

      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>
      <div className ="ListButton" >
        <div className =  "ListButtonLogo"> <AppsIcon /> </div> 
        <div className =  "ListButtonText">Home</div> 
      </div>

    </div>
  );
};

export default Leftbar;
