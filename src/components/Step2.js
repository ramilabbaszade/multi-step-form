import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Slider from "@material-ui/core/Slider";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import { FormContext } from "./context/FormContext";

import "./Step2.css";

const marks = [
  {
    value: 0,
    scaledValue: 15000,
    label: "$15.000",
  },
  {
    value: 20,
    scaledValue: 50000,
    label: "$50.000",
  },
  {
    value: 40,
    scaledValue: 100000,
    label: "$100.000$",
  },
  {
    value: 60,
    scaledValue: 200000,
    label: "$200.000",
  },
  {
    value: 80,
    scaledValue: 500000,
    label: "$500.000",
  },
  {
    value: 100,
    scaledValue: 1000000,
    label: "$1.000.000+",
  },
];

const IOSSlider = withStyles({
  root: {
    color: "#35A0EE",
    height: 2,
    padding: "15px 0",
  },
  markLabelActive: {
    color: "#35A0EE",
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "#35A0EE",
    borderRadius: "0",
    marginTop: -7,
    marginLeft: -5,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 3,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 10,
    width: 5,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

const Step2 = () => {
  const { state, setState } = useContext(FormContext);

  const [fromPriceInput, setFromPriceInput] = useState(20);
  const [toPriceInput, setToPriceInput] = useState(80);

  let fromPriceHandler = () => {
    if (state.priceFrom <= 15000) {
      setFromPriceInput(0);
    } else if (state.priceFrom <= 50000) {
      setFromPriceInput(20);
    } else if (state.priceFrom <= 100000) {
      setFromPriceInput(40);
    } else if (state.priceFrom <= 200000) {
      setFromPriceInput(60);
    } else if (state.priceFrom <= 500000) {
      setFromPriceInput(80);
    } else if (state.priceFrom > 500000) {
      setFromPriceInput(100);
    }
  };

  let toPriceHandler = () => {
    if (state.priceTo <= 15000) {
      setToPriceInput(0);
    } else if (state.priceTo <= 50000) {
      setToPriceInput(20);
    } else if (state.priceTo <= 100000) {
      setToPriceInput(40);
    } else if (state.priceTo <= 200000) {
      setToPriceInput(60);
    } else if (state.priceTo <= 500000) {
      setToPriceInput(80);
    } else if (state.priceTo > 500000) {
      setToPriceInput(100);
    }
  };

  const handleSliderFrom = (event, newValue) => {
    const newPriceFrom = marks.find((mark) => mark.value === newValue[0])
      ?.scaledValue;
    const newPriceTo = marks.find((mark) => mark.value === newValue[1])
      ?.scaledValue;
    setState({ priceFrom: newPriceFrom, priceTo: newPriceTo });
  };

  const handleRadio = (e) => {
    setState({ ...state, isInvestor: e.target.value });
  };

  return (
    <div>
      <h2>Investment plans</h2>
      <p className="low-color">
        Let us know about your investment plans. This will help us get you to
        the right expert who will help you further
      </p>
      <h3>How much are you planning to invest in this year?</h3>
      <TextField
        label="From"
        id="standard-start-adornment"
        onKeyUp={fromPriceHandler}
        value={state.priceFrom || ""}
        onChange={(e) => setState({ ...state, priceFrom: e.target.value })}
        style={{ marginRight: "1rem" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="To"
        id="standard-start-adornment"
        onKeyUp={toPriceHandler}
        value={state.priceTo || ""}
        onChange={(e) => setState({ ...state, priceTo: e.target.value })}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />

      <div className="slider_component">
        <IOSSlider
          key={[fromPriceInput, toPriceInput]}
          defaultValue={[fromPriceInput, toPriceInput] || []}
          marks={marks}
          step={null}
          onChange={handleSliderFrom}
        />
      </div>

      <h3>Are you an accredited investor?</h3>
      <div className="radio_group">
        <div className={`radio_container ${state.isInvestor === "yes" && 'radioActive'}`}>
          <Radio
            onChange={handleRadio}
            value="yes"
            checked={state.isInvestor === "yes"}
            style={{ color: `${state.isInvestor ==="yes" ? '#35A0EE':'#D5D9DC'}`}}
          />
          <span>Yes</span>
        </div>
        <div className={`radio_container ${state.isInvestor === "no" && 'radioActive'}`}>
          <Radio
            onChange={handleRadio}
            checked={state.isInvestor === "no"}
            value="no"
            style={{ color: `${state.isInvestor ==="no" ? '#35A0EE':'#D5D9DC'}`}}
          />
          <span>No</span>
        </div>
      </div>
    </div>
  );
};

export default Step2;
