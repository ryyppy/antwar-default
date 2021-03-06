import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
    this.state = {
      count: props.count
    };
  }

  inc() {
    this.setState({
      count: this.state.count + 1
    });
  }

  dec() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
      <button onClick={() => this.dec()}> - </button>
        Current count: {count}
        <button onClick={() => this.inc()}> + </button>
      </div>
    );
  }
}
