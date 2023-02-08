import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  //!   const [userInput, setUserInput] = useState({
  //!     enteredTitle: "",
  //!    enteredAmount: "",
  //!     enteredDate: "",
  //!   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    //* setUserInput({
    //*   ...userInput,
    //*   enteredTitle: e.target.value,
    //* });
    //*setUserInput((prevState) => {
    //*  return { ...prevState, enteredTitle: e.target.value };
    //*});
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    //* setUserInput({
    //*   ...userInput,
    //*   enteredAmount: e.target.value,
    //* });
    //* setUserInput((prevState) => {
    // *    return { ...prevState, enteredAmount: e.target.value };
    // *  });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    //* setUserInput({
    //*   ...userInput,
    //*   enteredDate: e.target.value,
    //* });
    //* setUserInput((prevState) => {
    //*     return { ...prevState, enteredDate: e.target.value };
    //*   });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.0.1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
