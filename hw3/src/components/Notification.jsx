import React, { PureComponent } from "react";

export class Notification extends PureComponent {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          zIndex: "1",
          top: "20px",
          left: "50%",
          width: "50%",
          height: "max-content",
          padding: "20px",
          alignItems: "center",
          justifyContent: "space-around",
          display: "flex",
          transform: "translate(-50%)",
          background: "black",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>Success</h2>
        <button
          style={{
            padding: "10px",
            fontSize: "24px",
          }}
          onClick={() => this.props.toogleShowMessagge()}
        >
          Close
        </button>
      </div>
    );
  }
}

export default Notification;
