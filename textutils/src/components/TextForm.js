import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   text = "enter the text"; //Wrong way
  //   setText("new text"); // Correct Way

  const handleUppercaseClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase!", "success");
  };
  const handleLowercaseClick = () => {
    // console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase!", "success");
  };
  const handleCleartextClick = () => {
    // console.log("Lowercase was Clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert(" Text cleared!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed!", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#464545",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCleartextClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charaters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
