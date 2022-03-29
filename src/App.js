import React from "react";
import "./App.css";
import Expenses from "./component/Expenses";

const App = () => {
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

  return React.createElement('div', {}, 
    React.createElement('h2', {}, "Let's get started!" ),
    React.createElement(Expenses, {items: expense})
  )
}

export default App;
