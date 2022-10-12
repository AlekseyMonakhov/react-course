import React, { PureComponent } from "react";
import "./formInput.css";

export class FormInput extends PureComponent {
  state = { focused: false };

  handleFocus = () => {
    this.setState({ focused: true });
  };
  render() {
    const { label, errorMessage, onChange, id, ...inputProps } = this.props;
    return (
      <div className='formInput'>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          {...inputProps}
          onFocus={this.handleFocus}
          focused={this.state.focused.toString()}
          onChange={onChange}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default FormInput;
