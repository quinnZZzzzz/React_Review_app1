import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

const Expenses = () => {
  const expenses = [
    {
      date: new Date("01-02-2021"),
      title: "Book",
      amount: "£29.99",
    },
    {
      date: new Date("1-10-2021"),
      title: "Food",
      amount: "£300.05",
    },
    {
      date: new Date("2-20-2021"),
      title: "Cloth",
      amount: "£1000",
    },
    {
      date: new Date("03-31-2021"),
      title: "Bill",
      amount: "£89.99",
    },
  ];

  return (
    <Card className="expenses">
      <ExpenseItem items={expenses[0]} />
      <ExpenseItem items={expenses[1]} />
      <ExpenseItem items={expenses[2]} />
      <ExpenseItem items={expenses[3]} />
    </Card>
  );
};

export default Expenses;
