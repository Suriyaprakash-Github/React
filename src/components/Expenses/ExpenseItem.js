import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setCost] = useState(props.amount);
  const renameHandler = () => {
    setTitle("NOPE");
    console.log({ title });
  };
  const costHandler = () => {
    setCost(100);
    console.log(amount);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={costHandler}>Cost Changer</button>
      <button onClick={renameHandler}>Title Changer</button>
    </Card>
  );
};

export default ExpenseItem;
