import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card>
      <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
    </Card>
  );
}
export default Expenses;
