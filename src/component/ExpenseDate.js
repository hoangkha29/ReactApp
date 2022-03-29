import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return React.createElement('div', {className:"expense-date"}, 
        React.createElement('div', {className:"expense-date__month"}, month),
        React.createElement('div', {className:"expense-date__year"}, year),
        React.createElement('div', {className:"expense-date__day"}, day),
    )
};

export default ExpenseDate;
