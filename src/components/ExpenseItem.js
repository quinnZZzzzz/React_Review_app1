import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const dates = props.items.date;

  return (
    <div className="expense-item">
      <ExpenseDate dates={dates} />
      <div className="expense-item__description">
        <h2>{props.items.title}</h2>
        <div className="expense-item__price">{props.items.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
