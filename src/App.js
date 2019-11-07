import React from "react";
//import logo from "./logo.svg";
import bg from "./img/bg.jpg";
import "./App.css";
import Greet from "./component/Greet";
function App() {
  return (
    <div class="card">
      <div class="container">
        <div class="infocontainer">
          <div class="number">
            12<sup>o</sup>
          </div>
          <div>
            <div class="text1">Scattered Cloud</div>
            <div class="text">Mississauga/Canada</div>
          </div>
          <div class="time">
            9:38 <span class="spanpropP">p.m.</span>
          </div>

          <div class="day">Monday,03</div>
        </div>
      </div>

      <div class="icon">
        <div class="square1"></div>
        <div class="square2"></div>
        <div class="square3"></div>
        <div class="square4"></div>
        <Greet></Greet>
      </div>
    </div>
  );
}

export default App;
