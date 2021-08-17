import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import TagsAdder from "./TagsAdder";
import "./styles/App.css";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagDirection, setTagDirection] = useState(false);
  const [addInput, setAddInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  function handleShowForm() {
    setIsShow(!isShow);
  }
  const addTagHandler = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setTags([...tags, e.target.value]);
      setInputValue("");
    }
  };

  function handleAddInput() {
    setAddInput(!addInput);
  }
  function handleColumnDirection(e) {
    setTagDirection(true);
  }
  function handleRowDirection() {
    setTagDirection(false);
  }

  useEffect(() => {
    const raw = localStorage.getItem("tags") || [];
    setTags(JSON.parse(raw));
  }, []);
  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

  return (
    <div className="tags-form">
      <Header isShow={isShow} handleShowForm={handleShowForm} />

      {isShow ? (
        <Content
          isShow={isShow}
          setIsShow={setIsShow}
          tags={tags}
          setTags={setTags}
          handleShowForm={handleShowForm}
          setTagDirection={setTagDirection}
          handleColumnDirection={handleColumnDirection}
          handleRowDirection={handleRowDirection}
          tagDirection={tagDirection}
          addInput={addInput}
          handleAddInput={handleAddInput}
          addTagHandler={addTagHandler}
          component={TagsAdder}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : (
        <TagsAdder
          isShow={isShow}
          tagDirection={tagDirection}
          tags={tags}
          setTags={setTags}
          addInput={addInput}
          handleAddInput={handleAddInput}
          addTagHandler={addTagHandler}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
    </div>
  );
}
