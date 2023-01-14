
import React from "react";
import './style.css';

const ExpenseFilter=(props)=>{

    const dropdownHandler=(event)=>{
        props.getYear(event.target.value);
    }
    return <div className="expense-filter">
        <label htmlFor="year">Filter by Date:</label><br></br>
        <select id="year" name="year" value={props.selected} onChange={dropdownHandler} className='expense-filter-select'>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    </div>
}

export default ExpenseFilter;