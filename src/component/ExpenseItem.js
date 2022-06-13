import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!!!')
        console.log(title)
    }

    return React.createElement(Card, {className:"expense-item"}, 
        React.createElement(ExpenseDate, {date:props.date}),
        React.createElement('div', {className:"expense-item__description"},
            React.createElement('h2', {}, title),
            React.createElement('div', {className:"expense-item__price"}, '$' + props.amount),
            React.createElement('button',{onClick:clickHandler}, 'Change title')
        )
    )
};

export default ExpenseItem;