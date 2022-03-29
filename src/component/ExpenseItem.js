import React from 'react';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return React.createElement(Card, {className:"expense-item"}, 
        React.createElement(ExpenseDate, {date:props.date}),
        React.createElement('div', {className:"expense-item__description"},
            React.createElement('h2', {}, props.title),
            React.createElement('div', {className:"expense-item__price"}, '$' + props.amount)
        )
    )
};

export default ExpenseItem;