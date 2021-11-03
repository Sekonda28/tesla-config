import { useState } from "react";

const Selection = (props) => {
  const price1 = parseInt(props.price1);
  const price2 = parseInt(props.price2);
  const [class1, setClass1] = useState("selected");
  const [class2, setClass2] = useState("unselected");

  const handleClick1 = () => {
    if (class1 !== "selected") {
      props.setPrice(props.price - price2 + price1);
      setClass1("selected");
      setClass2("unselected");
    }
  };

  const handleClick2 = () => {
    if (class2 !== "selected") {
      props.setPrice(props.price - price1 + price2);
      setClass2("selected");
      setClass1("unselected");
    }
  };

  return (
    <div className="choices">
      <h2>{props.title}</h2>
      <p className={class1} onClick={handleClick1}>
        {props.option1} - {props.price1} €
      </p>
      <p className={class2} onClick={handleClick2}>
        {props.option2} - {props.price2} €
      </p>
    </div>
  );
};

export default Selection;
