import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modals ui dimmer visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
