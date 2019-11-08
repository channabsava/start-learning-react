import React, { Component } from "react";

class Card1 extends Component {
  render() {
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
              9:38<span class="timepm">p.m.</span>
            </div>

            <div class="day">Monday,03</div>
          </div>
        </div>
        <div class="icon">
          <div class="square1"></div>
          <div class="square2"></div>
          <div class="square3"></div>
          <div class="square4"></div>
        </div>
      </div>
    );
  }
}
export default Card1;
