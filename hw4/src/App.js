import React, { Component } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

export class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "User Name",
      errorMessage:
        "User Name should be from 2 characters and shouldnt include any numbers and spec symbols",
      label: "User Name",
      pattern: "^[A-Za-z]{2,}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "User last name",
      errorMessage:
        "Last Name should be from 2 characters and shouldnt include any numbers and spec symbols",
      label: "User last name",
      pattern: "^[A-Za-z]{2,}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be valid email adress ",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 6-10 characters and include at least 1 capital letter, 1 number, 1 leter",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,10}$`,
      required: true,
    },
  ];
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='app'>
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Register</h1>
          {this.inputs.map((input) => (
            <FormInput
              key={input.id}
              value={this.state[input.name]}
              {...input}
              onChange={this.onChangeHandler}
            />
          ))}
          <button>{Object.values(this.state).every((value) => value.length)  ? "Submit" : "Fill form"}</button>
        </form>
      </div>
    );
  }
}

export default App;
