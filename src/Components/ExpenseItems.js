import './style.css';
import React,{useState} from 'react';

const ExpenseItems = (props) => {

  const [title,setTitle]=useState(props.title);

  const titleHandler=()=>{
    setTitle('Updated!');
  }

  return (
    <div className='expense-items'>
      <div className='expense-date'>
        <div>{props.date.getFullYear()}</div>
        <div>{props.date.toLocaleString('en', { month: 'long' })}</div>
        <div>{props.date.toLocaleString('en', { day: 'numeric' })}</div>
      </div>
      <div className='expense-title'>
        <h2>{title}</h2>
      </div>
      <div className='expense-amount'>${props.amount}</div>
      <button className="btn" onClick={titleHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItems;