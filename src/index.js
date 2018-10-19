import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export class SimpleClock extends Component {
  state = {
    message: ""
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      message: `The time is : ${nextProps.now.toLocaleString()}`
    };
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     message: `The time is : ${nextProps.now.toLocaleString()}`
  //   });
  // }

  render() {
    return <div> {this.state.message} </div>;
  }
}

class ComponentLifecycleChanges extends Component {
  state = { now: new Date() };

  componentDidMount() {
    setInterval(() => this.setState({ now: new Date() }), 1000);
  }
  render() {
    const { now } = this.state;
    return (
      <div>
        <h2>Component Component Lifecycle Changes</h2>
        <SimpleClock now={now} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ComponentLifecycleChanges />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
