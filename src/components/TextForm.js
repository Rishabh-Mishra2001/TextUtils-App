import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [isBold, setBold] = useState(false);
  const [textCount, setTextCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleUpClick = () => {
    // console.log("You have clicked " + text);
    setText(text.toUpperCase());
  };

  const handleDownClick = () => {
    //console.log("You have clicked " + text);
    setText(text.toLowerCase());
  };

  const handleBoldClick = () => {
    setBold(!isBold);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.alert("Copied to Clipboard", "success");
  };

  function handleChange(e) {
    e.preventDefault();
    let text = e.target.value;
    setText(e.target.value);
    let wordCount = text.match(/\w+/g); // Counting only words using w+
    let cCount = text.match(/\w/g); // Counting every char using w
    setTextCount(wordCount ? wordCount.length : 0);
    setCharCount(cCount ? cCount.length : 0);
  }

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#092544" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="8"
            style={{
              color: props.mode === "dark" ? "white" : "#092544",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleBoldClick}>
          Bold Text
        </button>
        <button className="btn btn-primary me-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#092544" }}
      >
        <h2>Text Summary</h2>
        <p>
          <span style={{ fontWeight: "bold" }}>
            {/*text.split(" ").length*/}
            {textCount}
          </span>{" "}
          words <span style={{ fontWeight: "bold" }}>{charCount}</span>{" "}
          characters
        </p>
        <h2>Preview</h2>
        <p
          style={{
            textAlign: "justify",
            fontWeight: isBold ? "bold" : "normal",
          }}
        >
          {text.length > 0 ? text : "Enter text in textbox to preview it"}
        </p>
      </div>
    </>
  );
}
