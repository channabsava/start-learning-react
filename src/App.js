import React from "react";
import style from "./App.module.css";
import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";

function App() {
  return (
    <div className={style.base}>
      <Card1
        temperature="12"
        heading="Scattered Cloud"
        subHeading="Mississauga/Canada"
        time={["9:30", "pm"]}
        day="Monday"
      />
      <Card2
        heading="No penalty on withdrawal from your fixed deposit"
        subHeading="  On first partual withdrawal upto 25% of your original FD principle
            value"
        link="KNOW MORE"
      />
      <Card3
        name="Alexndra Dadario"
        companyName="Parker Industries"
        designation="UX DESIGNER"
        heading="USUALLY COLLABORATED WITH"
      />
    </div>
  );
}

export default App;
