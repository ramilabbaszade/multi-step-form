import React, { useContext } from "react";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import FormControl from '@material-ui/core/FormControl';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {FormContext} from './components/context/FormContext'

import "./App.css";


function App() {
  const { count } = useContext(FormContext);

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
        <FormControl className="main-body" component="fieldset">
          {count === 1 && <Step1/>}
          {count === 2 && <Step2/>}
          {count === 3 && <Step3/>}
        </FormControl>
          <Footer />
      </main>
    </div>
  );
}

export default App;
