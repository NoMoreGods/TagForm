import React from "react";
import ArrowDown from "../images/arrow_down.png";
import "./styles/Header.css";

export default function Headers({ isShow, handleShowForm }) {
  return (
    <header className="header">
      <h1 className="header__name" onClick={handleShowForm}>
        Теги
      </h1>
      {!isShow && (
        <img
          src={ArrowDown}
          className="header__icon"
          onClick={handleShowForm}
          alt="Open"
        />
      )}
    </header>
  );
}
