import "./App.css";
import React from "react";
import Client from "./components/Client";

class App extends React.Component {
  state = { clients: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((clients) => this.setState({ clients: clients.slice(0, 10) }));
  }
  updateHandler = async (id, value) => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            title: `${value}`,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      result.status === 200 &&
        this.setState({
          clients: this.state.clients.map((client) =>
            client.id === id ? { ...client, title: value } : client
          ),
        });
    } catch (err) {
      console.log(err);
    }
  };
  removeHandler = async (id) => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      result.status === 200 &&
        this.setState({
          clients: this.state.clients.filter((client) => client.id !== id),
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          padding: "15px",
          gap: "10px",
        }}
      >
        {this.state.clients.map((client) => (
          <Client
            client={client}
            updateHandler={this.updateHandler}
            removeHandler={this.removeHandler}
            key={client.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
