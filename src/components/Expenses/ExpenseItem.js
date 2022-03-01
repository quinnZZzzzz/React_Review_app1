import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const dates = props.items.date;
  const [title, setTitle] = useState(props.items.title);

  const onSubmitTitle = () => {
    setTitle("Hi");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate dates={dates} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.items.amount}</div>
      </div>
      <button onClick={onSubmitTitle}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
