import React from "react";
import AddButton from "./AddButton";
import CloseImg from "../images/close.png";
import "./styles/TagsAdder.css";

export default function TagsAdder({
  handleAddInput,
  addInput,
  tags,
  setTags,
  tagDirection,
  addTagHandler,
  isShow,
  inputValue,
  setInputValue
}) {
  const deleteHandler = (index) => {
    setTags(tags.filter((el, id) => id !== index));
  };

  const inputsForm = "tags-adder__tags" + (tagDirection ? "_column" : "");
  return (
    <div className="tags-adder">
      <ul className={inputsForm}>
        {tags.map((tag, index) => (
          <li className="tags-adder__tag" key={index}>
            <span>{tag}</span>
            <img
              alt=""
              src={CloseImg}
              className="tags-adder__icon"
              onClick={() => deleteHandler(index)}
            />
          </li>
        ))}
        {isShow ? (
          <AddButton
            handleAddInput={handleAddInput}
            addInput={addInput}
            addTagHandler={addTagHandler}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        ) : null}
      </ul>
    </div>
  );
}
