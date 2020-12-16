import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FormContext } from "./context/FormContext";

import ReactPhoneInput from "react-phone-input-mui";
import "react-phone-input-2/lib/style.css";

import "./Step1.css";

const Step1 = () => {
  const countries = [
    {
      value: "UKR",
      label: "Ukraine",
    },
    {
      value: "AZE",
      label: "Azerbaijan",
    },
    {
      value: "GER",
      label: "Germany",
    },
    {
      value: "TR",
      label: "Turkey",
    },
  ];

  const { state, setState } = useContext(FormContext);

  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h2>Contact Details</h2>
        <p className="low-color">
          Welcome to United Properties, we are glad to see you! Let’s get
          started by letting us know a little bit about you
        </p>
      </div>
      <div className="firstline-input-container">
        <TextField
          required
          id="standard-required"
          label="Full name"
          value={state.fullName || "John Doe"}
          onChange={(e) => setState({ ...state, fullName: e.target.value })}
          style={{ marginRight: "1rem" }}
        />
        <ReactPhoneInput
          value={state.phone}
          defaultCountry={"us"}
          onChange={(number) => setState({ ...state, phone:number })}
          inputClass="input-phone"
          buttonClass="button-phone"
          component={TextField}
          inputExtraProps={{
            margin: "normal",
            autoComplete: "phone",
            name: "custom-username",
          }}
        />
      </div>
      <TextField
        id="standard-full-width"
        label="E-mail address"
        value={state.email || "john.doe@unitedproperties.com"}
        onChange={(e) => setState({ ...state, email: e.target.value })}
        style={{ margin: "2rem 0" }}
        fullWidth
        type="email"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-select-currency"
        select
        label="Country"
        fullWidth
        value={state.country || "UKR"}
        onChange={(e) => setState({ ...state, country: e.target.value })}
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <h3>Privacy policy</h3>
      <p className="low-color">
        We know you care about how your personal information is used and shared,
        so we take your privacy seriously
      </p>
      <div className="main-navigation__text">
        <a href="/">Expand privacy policy</a>
        <ArrowForwardIosIcon style={{ color: "#35A0EE" }} />
      </div>
    </div>
  );
};

export default Step1;
