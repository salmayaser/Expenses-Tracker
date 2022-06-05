import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length) {
    return (
      <ul className="expenses-list">
        {props.expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>;
        })}
      </ul>
    );
  } else {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
};
export default ExpensesList;
