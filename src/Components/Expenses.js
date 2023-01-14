import React, { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItems from "./ExpenseItems";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [year, setYear] = useState("2020");

    const getYearHandler = (year) => {
        setYear(year);
    };
    const filteredExpense = props.arr.filter((item) => {
        return item.date.getFullYear().toString() === year;
    });

    let filteredExpenseList = (
        <h2 className="expense-not-found">No expense Found!</h2>
    );

    if (filteredExpense.length > 0) {
        filteredExpenseList = filteredExpense.map((items) => (
            <ExpenseItems
                title={items.title}
                amount={items.amount}
                date={items.date}
                key={items.id}
            />
        ));
    }

    return (
        <>
        {filteredExpense.length  && <ExpenseChart expenses={filteredExpense} />}
            <Card>
                <ExpenseFilter getYear={getYearHandler} selected={year} />
                {filteredExpenseList}
            </Card>
        </>
    );
};

export default Expenses;


// eslint-disable-next-line no-lone-blocks
{/* {filteredExpense.length === 0 && (
        <h2 className="expense-not-found">No expense Found!</h2>
      )}
      {filteredExpense.length > 0 &&
        filteredExpense.map((items) => (
          <ExpenseItems
            title={items.title}
            amount={items.amount}
            date={items.date}
            key={items.id}
          />
        ))} */}