import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseLists from "./ExpenseLists";
import Chart from "../Chart/Chart";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const selectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // const chartData = filteredExpenses.map((expense) => ({
  //   value: expense.amount,
  //   id: Math.random().toString(),
  //   label: expense.value,
  // }));

  return (
    <div>
      {/* <Chart dataPoints={chartData} /> */}
      <Card className="expenses">
        <div>
          <ExpensesFilter selected={filteredYear} onSelect={selectHandler} />
        </div>
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseLists items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
