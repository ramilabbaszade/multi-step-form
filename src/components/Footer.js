import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./Footer.css";

const PrimaryButton = withStyles({
  root: {
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    lineHeight: 1.5,
    boxShadow: "0px 0px 5px rgba(53, 160, 238, 0.25)",
    color: "#fff",
    backgroundColor: "#35A0EE",
    border: "none",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
  },
})(Button);

const SecondaryButton = withStyles({
  root: {
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    lineHeight: 1.5,
    color: "#35A0EE",
    marginRight: "1rem",
    background: "rgba(53, 160, 238, 0.1)",
    border: "none",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
})(Button);

const Footer = ({ setCount, count }) => {
  return (
    <footer>
      <div
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
        className="back-btn"
      >
        <ArrowBackIosIcon />
        <a href="#home">Back to the {count === 1 ? "homepage" : "previous page"}</a>
      </div>
      <div>
        <SecondaryButton
          onClick={() => {
            if (count === 3) {
              setCount(1);
            } else {
              setCount(count + 1);
            }
          }}
        >
          Skip for now
        </SecondaryButton>
        <PrimaryButton
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          href="/"
        >
          {count === 3 ? "Finish" : "Next step"}
        </PrimaryButton>
      </div>
    </footer>
  );
};

export default Footer;
