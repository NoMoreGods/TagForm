import React from "react";
import AutosizeInput from "react-input-autosize";
import AddImg from "../images/circle.png";
import "./styles/AddButton.css";

export default function AddButton({
  handleAddInput,
  addInput,
  addTagHandler,
  inputValue,
  setInputValue
}) {
  function handleInputWidth(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      {!addInput ? (
        <button className="add-button__button" onClick={handleAddInput}>
          <img alt="" src={AddImg} className="add-button__icon" />
          Добавить метку
        </button>
      ) : (
        <AutosizeInput
          autoFocus
          type="text"
          value={inputValue}
          placeholder="Press Enter to add tag"
          onBlur={handleAddInput}
          onChange={handleInputWidth}
          onKeyUp={(e) => (e.key === "Enter" ? addTagHandler(e) : null)}
          className="add-button__input"
          inputStyle={{ outline: 0, border: 0, height: 25 }}
        />
      )}
    </>
  );
}
