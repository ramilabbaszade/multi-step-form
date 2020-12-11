import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Step1 = ({setCount}) => {
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
  const [country, setCountry] = React.useState("UKR");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div style={{marginTop:'1rem'}}>
      <h2>Contact Details</h2>
      <p className="low-color">
        Welcome to United Properties, we are glad to see you! Let’s get started
        by letting us know a little bit about you
      </p>
      <form>
        <TextField
          required
          id="standard-required"
          label="Full name"
          style={{ marginRight: "1rem" }}
          defaultValue="John Doe"
        />
        <TextField
          label=" "
          className={clsx()}
          id="standard-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
          }}
        />
        <TextField
          id="standard-full-width"
          label="E-mail address"
          defaultValue="john.doe@unitedproperties.com"
          style={{ margin: "2rem 0" }}
          placeholder="Placeholder"
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
          value={country}
          onChange={handleChange}
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
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
