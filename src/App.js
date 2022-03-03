import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

function App() {
  const INITIAL_EXPENSES = [
    {
      id: "e1",
      date: new Date("01-02-2022"),
      title: "Book",
      amount: 29.99,
    },
    {
      id: "e2",
      date: new Date("1-10-2021"),
      title: "Food",
      amount: 300.05,
    },
    {
      id: "e3",
      date: new Date("2-20-2022"),
      title: "Cloth",
      amount: 1000,
    },
    {
      id: "e4",
      date: new Date("03-31-2021"),
      title: "Bill",
      amount: 89.99,
    },
  ];

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const AddExpenseHandeler = (newExpense) => {
    console.log("In App.js");
    console.log(newExpense);

    setExpenses((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandeler} />
      <Expenses data={expenses} />;
    </div>
  );
}

export default App;
