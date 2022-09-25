import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Stepan",
      age: 25,
      show: false,
    };
  }

  handleClick = () => {
    this.setState({ name: "Mykola", age: "30", show: !this.state.show });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.state.show && (
          <h1>
            name: {this.state.name}, age: {this.state.age}
          </h1>
        )}
        <button
          style={{ padding: "10px 20px" }}
          onClick={this.handleClick}
        >
          {this.state.show ? "Скрыть" : "Показать"}
        </button>
      </div>
    );
  }
}

export default App;
