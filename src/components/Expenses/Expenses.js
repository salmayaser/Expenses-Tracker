import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filter, setFilter] = useState("");
  const filterChangedHandler = (selectedFilter) => {
    setFilter(selectedFilter);
  };
  const expensesToShow = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangedHandler}></ExpensesFilter>
        <ExpensesChart expenses={expensesToShow}></ExpensesChart>
        <ExpensesList expenses={expensesToShow}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expenses;
