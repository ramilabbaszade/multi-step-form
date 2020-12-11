import React, { useState } from "react";
import "./App.css";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";


import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="app">
      <SideBar count={count}/>
      <main>
        <div className="main-navigation">
          <div className="low-color">STEP {count} OF 3</div>
          <div className="main-navigation__text">
            <div className="low-color">Lost or have trouble?</div>
            <a href="/">Get help</a>
            <ArrowForwardIosIcon style={{ color: "#35A0EE" }} />
          </div>
        </div>
        <div className="main-body">
          {count === 1 && <Step1 setCount={setCount}/>}
          {count === 2 && <Step2 setCount={setCount}/>}
          {count === 3 && <Step3 setCount={setCount}/>}
          <Footer count={count} setCount={setCount}/>
        </div>
      </main>
    </div>
  );
}

export default App;
