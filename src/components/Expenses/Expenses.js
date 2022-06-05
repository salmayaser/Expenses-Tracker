import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filter, setFilter] = useState("");
  const filterChangedHandler = (selectedFilter) => {
    setFilter(selectedFilter);
  };
  const expesesToShow = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangedHandler}></ExpensesFilter>
        {expesesToShow.map((expense) => {
          return <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>;
        })}
      </Card>
    </div>
  );
}
export default Expenses;
