import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const newExpenseHandler = (expenseData) => {
    props.onSubmitNewExpense({ ...expenseData, id: Math.random().toString() });
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitNewExpense={newExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
