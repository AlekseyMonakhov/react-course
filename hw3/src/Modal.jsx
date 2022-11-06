import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("section");
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.container);
    console.log("hello from modal");
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.container);
    console.log("by from modal");
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}
