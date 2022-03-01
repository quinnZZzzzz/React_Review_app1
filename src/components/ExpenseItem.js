import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  const dates = props.items.date;

  return (
    <Card className="expense-item">
      <ExpenseDate dates={dates} />
      <div className="expense-item__description">
        <h2>{props.items.title}</h2>
        <div className="expense-item__price">{props.items.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
