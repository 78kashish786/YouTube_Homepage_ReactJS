import React from "react";
import "./Card.css";
// import data from "../../dummydata";
function Card() {
  return (
    <>
      <div className="cardContainer">
        <div className="cardTile">
          <div className=" cardImg">
            <img src="Asset/31.jpg" alt="logo" className="CardImage" />
          </div>
          <div className="cardInfo">
            <div className="cardInfoImage">
              <img
                src="Asset/3.jpg"
                alt="channellogo"
                className="cardInfoImageChannel"
              />
            </div>
            <div className="cardInfoText">
              <div className="cardTitle">
                <h5>This is my vlog</h5>
              </div>
              <div className="cardChannelName">
                <p>Kashish</p>
              </div>
              <div className="cardTime">
                <p>4 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
