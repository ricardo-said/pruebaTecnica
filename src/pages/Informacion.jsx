import React from 'react';
import '../style/Informacion.css';
import CredistCard from "../assets/imgs/credirCard.png";
import avatar from "../assets/imgs/avatar1.png";

const Informacion = () => {
  return (
    <>

      <div className="wrapper">
        <img src={CredistCard} alt="" />
        <div className="card">
          <img src={avatar} />
          <div id="container">
            <p id="name">John Doe</p>
            <p id="exp">Web Developer @ Slackhouse.io</p>
            <a href="#" id="button">Contact</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Informacion