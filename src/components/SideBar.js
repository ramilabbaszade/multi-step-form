import React, {useContext} from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleIconOutlined from "@material-ui/icons/CheckCircleOutlined";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { FormContext } from "./context/FormContext";


import './SideBar.css'

const SideBar = () => {
  const { count } = useContext(FormContext);

  const checkStep2 = count === 2 || count === 3;
  const checkStep3 = count === 3;
  return (
    <aside className="side_container">
      <h3>
        UNITED<span>PROPERTIES</span>
      </h3>
      <div className="steps-map">
        <div className="single-step">
          <CheckCircleIcon />
          <div>Contact Details</div>
        </div>
        <hr className="step-seperator" />
        <div className="single-step">
          {checkStep2 ? (
            <CheckCircleIcon />
          ) : (
            <CheckCircleIconOutlined
              className={`${checkStep2 ? "" : "low-color"}`}
            />
          )}
          <div className={`${checkStep2 ? "" : "low-color"}`}>
            Investment Plans
          </div>
        </div>
        <hr className="step-seperator" />
        <div className="single-step">
          {count === 3 ? (
            <CheckCircleIcon />
          ) : (
            <CheckCircleIconOutlined
              className={`${checkStep3 ? "" : "low-color"}`}
            />
          )}
          <div className={`${checkStep3 ? "" : "low-color"}`}>
            Investmen preferences
          </div>
        </div>
      </div>
      <div className="quotes">
        <div className="quotes-triangle"></div>
        <div className="qutoes-icon">
          <FormatQuoteIcon />
        </div>
        <div className="quotes-body">
          <p className="low-color">
            {count === 1
              ? `We care about your time, that's why we created a 3-stage onboarding
            that will not take more than 5 minutes to complete`
              : count === 2
              ? `Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free`
              : "United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side"}
          </p>
          <div className="quotes-footer">
            <div>
            <div>
              {count === 1
                ? "William Mac"
                : count === 2
                ? "Jodie Sears"
                : "Ollie Mcmahon"}{" "}
            </div>
            <div className="low-color">
              {count === 1
                ? "CO-FOUNDER, INVESTOR"
                : count === 2
                ? "UNITEDPROPERTIES’ AGENT"
                : "MANAGING DIRECTOR"}
            </div>
            </div>
            <div className="quotes-footer__logo">
              UP
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
