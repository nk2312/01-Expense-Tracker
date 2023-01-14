
import React, { useState } from "react";
import Card from "./Card";
import './style.css';

const NewExpense = (props) => {
    const [title, setNewTitle] = useState('');
    const [date, setNewDate] = useState('');
    const [amount, setNewAmount] = useState('');

    // const [obj,setObj]=useState({title:'',amount:'',date:''});

    const titleInput = (e) => {
        setNewTitle(e.target.value);
        // setObj({...obj,title:e.target.value});

        // setObj((prevState)=>{return {...prevState,title:e.target.value}})

    }
    const amountInput = (e) => {
        setNewAmount(e.target.value);
    }
    const dateInput = (e) => {
        setNewDate(e.target.value);
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();

        const newExpenseArray = {
            title: title,
            amount: amount,
            date: new Date(date),
            id: Math.random().toString()
        }
        setNewAmount('');
        setNewDate('');
        setNewTitle('');
        props.onSubmitExpenseHandler(newExpenseArray);
        //passing data from child to a parent component via calling a function and passing data as a arguments
    }
    return <Card>
        <form className="new-expense-form" onSubmit={formSubmitHandler}>
            <div className="new-expense-div">
                <div>
                    <lable>Title</lable>
                    <input type="text" onChange={titleInput} value={title} />
                </div>
                <div>
                    <lable>Amount</lable>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountInput} />
                </div>
            </div>
            <div className="new-expense-date">
                <lable>Date</lable>
                <input type="date" value={date} onChange={dateInput} />
            </div>
            <div className="new-expense-btn">
                <button className="new-btn">Submit</button>
            </div>
        </form>
    </Card>
}
export default NewExpense;