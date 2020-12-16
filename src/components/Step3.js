import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import "./Step3.css";


const checkboxs = [
  { id: 1, name: "checkedA", value: "Single family" },
  { id: 2, name: "checkedB", value: "Residential multifamily" },
  { id: 3, name: "checkedC", value: "Commercial retail" },
  { id: 4, name: "checkedD", value: "Commercial industrial" },
  { id: 5, name: "checkedE", value: "Commercial hospitality" },
  { id: 6, name: "checkedF", value: "Commercial warehousing" },
  { id: 7, name: "checkedG", value: "Commercial office" },
  { id: 8, name: "checkedK", value: "Other" },
];

const Step3 = () => {
  const [name, setName] = useState([])

  const handleChange = (e) => {
    let data = name;
    data.push(e.target.value);
    setName(data)
    
    console.log(name)

  };
  console.log(name)


  return (
    <div>
      <h2>Investment preferences</h2>
      <p className="low-color">
        This will help us figure out what your investment options are so that we
        can show you only possibly intresting for you deals
      </p>
      <h3>What kind of real estate are you interested in?</h3>
      <div className="checkboxs_group">
        {checkboxs.map((option, index) => {
          return (
            <div key={option.id} className="checkbox_container">
              <Checkbox
                key={index}
                value={option.value}
                onChange={(e)=> handleChange(e)}
                style={{ color: "#35A0EE" }}
              />
              <label htmlFor="check"> {option.value} </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Step3;
