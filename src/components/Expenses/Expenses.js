import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseLists from "./ExpenseLists";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const selectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter selected={filteredYear} onSelect={selectHandler} />
      </div>

      <ExpenseLists items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
