import React, { Component, useState } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Balance from "./components/balance.js";
import Deposit from "./components/deposit.js";
import Withdraw from "./components/withdraw.js";

import "./App.css";

function App() {
  const interfaced = "withdraw";
  const componentDidMount = async () => {};
  const card = () => {
    return (
      <div className="card">
        <div className="cardheader">
          <div>
            <p>Stats</p>
          </div>
          <div>
            <p>Deposit</p>
          </div>
          <div>
            <p>Withdraw</p>
          </div>
        </div>
        <div>{whichInterface()}</div>
      </div>
    );
  };
  const whichInterface = () => {
    var result = null;
    switch (interfaced) {
      case "balance":
        result = <Balance />;
        break;
      case "deposit":
        result = <Deposit />;
        break;
      case "withdraw":
        result = <Withdraw />;
        break;
      default:
        result = <Balance />;
    }

    return result;
  };

  return (
    <div className="App">
      <h1>Poken</h1>
      {card()}
    </div>
  );
}

export default App;
