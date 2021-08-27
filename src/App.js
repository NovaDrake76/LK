import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <div className="sideMenu">
        <div className="sidePerson">
          <img
            className="personIcon"
            src="https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.6435-1/p100x100/93691633_271640380523430_4925674112317128704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=x-d5utmrs94AX8cRj38&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fjdo1-2.fna&oh=3d4178eefef6778d20fff2a61d778c68&oe=614F00EC"
          ></img>
          <div className="personContainer">
            <div className="personInfo">Rodrigo Yoshikage</div>
            <div className="rascunho">{message}</div>
          </div>
        </div>
      </div>
      <div className="chat">
        <div className="chatTop"></div>
        <div className="chatBottom">
          <input
            onChange={(event) => setMessage("Rascunho: " + event.target.value)}
            type="text"
            name="input1"
            id="input1"
          />
          <button className="send">
            <i className="fas fa-paper-plane fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
