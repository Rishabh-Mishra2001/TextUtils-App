import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    let lowerWord = word.toLowerCase();
    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
  };
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {capitalize(props.alert.msg)} : {capitalize(props.alert.type)}
          {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button> */}
        </div>
      </div>
    )
  );
}

export default Alert;
