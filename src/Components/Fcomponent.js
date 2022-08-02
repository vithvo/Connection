import React, { useState } from "react";
import { Component } from "react";

export class Fcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.increment}>
          Прибавить
        </button>
        <button className="button" onClick={this.decrement}>
          Отнять
        </button>
        <button className="button" onClick={this.reset}>
          Обнулить
        </button>

        <h1>Cuttent: {this.state.count}</h1>
      </div>
    );
  }
}
