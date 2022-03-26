import React from "react";
import "./App.css";
import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expense = [
    {
      title: "Senpai",
      date: new Date(2021, 5, 12),
      amount: 32.23,
    },
    {
      title: "Yui Rio",
      date: new Date(2020, 7, 22),
      amount: 14.64,
    },
    {
      title: "Yuna Hina",
      date: new Date(2022, 5, 5),
      amount: 21.84,
    },
    {
      title: "Koharu Hinata",
      date: new Date(2019, 5, 21),
      amount: 11.62,
    },
  ];

  return (
    <div>
      <h2>Student list</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
