import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const newExpenseHandler = (expenseData) => {
    props.onSubmitNewExpense({ ...expenseData, id: Math.random().toString() });
  };
  const [isClicked, setIsClicked] = useState(false);
  const addNewExpenseHandler = () => {
    setIsClicked(true);
  };
  const cancelBtnHandler = () => {
    setIsClicked(false);
  };
  return (
    <div className="new-expense">
      {isClicked && (
        <ExpenseForm
          onSubmitNewExpense={newExpenseHandler}
          onCancelClicked={cancelBtnHandler}
        ></ExpenseForm>
      )}
      {!isClicked && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
