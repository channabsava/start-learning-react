import React from "react";
import style from "./Count.module.css";

import CounterContainer from "./Container/CounterContainer";

function App() {
  return (
    <div className={style.base}>
      <CounterContainer />
    </div>
  );
}

export default App;
