import ExpenseItem from "../components/ExpenseItem";

function Expenses(props) {
  return <ExpenseItem expense={props.expenses[0]}></ExpenseItem>;
}
export default Expenses;
