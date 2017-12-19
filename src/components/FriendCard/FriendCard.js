import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
  <div className="col-xs-3 col-sm-3 col-md-3">
    <div className='card animated fadeIn delay-02s'>
      <img className="img img-thumbnail d-block mx-auto" onClick={props.handleImageClick} id={props.id} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
