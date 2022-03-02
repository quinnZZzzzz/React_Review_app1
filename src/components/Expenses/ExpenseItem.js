import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
  const dates = props.items.date;
  const title = props.items.title;
  const amount = props.items.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate dates={dates} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
