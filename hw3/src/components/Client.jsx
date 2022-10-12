import React, { PureComponent } from "react";

export class Client extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={{ flex: "1", border: "none", borderBottom: "1px solid black" }}
          defaultValue={this.props.client.title}
          ref={this.myRef}
        />
        <button
          onClick={() =>
            this.props.updateHandler(
              this.props.client.id,
              this.myRef.current.value
            )
          }
        >
          Update
        </button>
        <p style={{ flexBasis: "20%", textAlign: "center" }}>
          User id is:{this.props.client.id}
        </p>
        <button onClick={() => this.props.removeHandler(this.props.client.id)}>
          delete
        </button>
      </div>
    );
  }
}

export default Client;
