import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail"

function Card(props) {
  return (
    <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.imgURL}/>
        </div>
        <div className="bottom">
            <Detail info={props.tel}></Detail>
            <Detail info={props.email}></Detail>
        </div>
    </div>
  );
}

export default Card;