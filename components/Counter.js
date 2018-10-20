import React from "react";
import style from "./Counter.scss";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.countUp = this.countUp.bind(this);
    this.state = {
      count: props.count
    };
  }

  countUp() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div className={style.root}>
        Current count: {count}
        <span onClick={() => this.countUp()}> + </span>
      </div>
    );
  }
}
