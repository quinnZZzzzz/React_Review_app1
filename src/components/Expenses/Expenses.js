import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem items={props.data[0]} />
      <ExpenseItem items={props.data[1]} />
      <ExpenseItem items={props.data[2]} />
      <ExpenseItem items={props.data[3]} />
    </Card>
  );
};

export default Expenses;
