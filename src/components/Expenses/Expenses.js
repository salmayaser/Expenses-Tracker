import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filter, setFilter] = useState("");
  const filterChangedHandler = (selectedFilter) => {
    setFilter(selectedFilter);
    console.log(filter);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangedHandler}></ExpensesFilter>
        {props.expenses.map((expense) => {
          return <ExpenseItem expense={expense}></ExpenseItem>;
        })}
      </Card>
    </div>
  );
}
export default Expenses;
