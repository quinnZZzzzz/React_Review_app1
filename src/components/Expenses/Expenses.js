import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const selectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter selected={filteredYear} onSelect={selectHandler} />
      </div>
      {props.data.map((expense) => (
        <ExpenseItem items={expense} />
      ))}

      {/* <ExpenseItem items={props.data[0]} />
      <ExpenseItem items={props.data[1]} />
      <ExpenseItem items={props.data[2]} />
      <ExpenseItem items={props.data[3]} /> */}
    </Card>
  );
};

export default Expenses;
