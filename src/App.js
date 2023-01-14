import NewExpense from "./Components/NewExpense";
import Expenses from "./Components/Expenses";
import { useState } from "react";

const DUMMY_EXPENSE = [
  {id:'e1', title: "Car Insurance", amount: "250.23", date: new Date("2020 09 25") },
  {id:'e2', title: "Medical Insurance", amount: "200", date: new Date("2020 03 12") },
  {id:'e3', title: "Shopping ", amount: "400.33", date: new Date("2021 09 08") },
  {id:'e4', title: "Grocery", amount: "100.03", date: new Date("2022 04 09") },
];

const App=()=>{

  const [expenseItems, setExpenseItems] = useState(DUMMY_EXPENSE );
  const [addExpense ,setAddExpense] =useState(false);

  const onSubmitExpenseHandler = (newExpenseArray) => {
    // setExpenseItems((prevState) => {
    //   return [newExpenseArray,...prevState];
    // });

    setExpenseItems((prevState)=>{return [newExpenseArray,...prevState]})
    setAddExpense(false);
  };

  const addExpenseHandler=()=>{setAddExpense(true)}

  return (
    <>
      {!addExpense && <button  className="add-expense-btn" onClick={addExpenseHandler}>Add Expenses</button>}
      {addExpense && <NewExpense onSubmitExpenseHandler={onSubmitExpenseHandler} />}
      <Expenses arr={expenseItems}/>
    </>
  );
}

export default App;