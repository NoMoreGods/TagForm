import { CopyToClipboard } from "react-copy-to-clipboard";
import TagsAdder from "./TagsAdder";
import Popup from "reactjs-popup";
import CopyImg from "../images/copy.png";
import CloseImg from "../images/close.png";
import JustifyImg from "../images/justify.png";
import LeftImg from "../images/left.png";
import "./styles/Content.css";

export default function Content({
  isShow,
  setIsShow,
  tags,
  setTags,
  handleShowForm,
  handleColumnDirection,
  handleRowDirection,
  tagDirection,
  addInput,
  handleAddInput,
  addTagHandler,
  inputValue,
  setInputValue
}) {
  function handleCancelForm() {
    setTags([]);
    setIsShow(!isShow);
  }

  return (
    <main className="content">
      <div className="content-wrapper content-wrapper_border_grey">
        <div className="button-wrapper button-wrapper_border_grey">
          <CopyToClipboard text={tags}>
            <button className="button button_copy">
              <img alt="" src={CopyImg} className="button__icon" />
              <span>Скопировать</span>
            </button>
          </CopyToClipboard>

          <div className="button-wrapper">
            <button
              className="button button_align_left"
              onClick={handleColumnDirection}
            >
              <img alt="" src={LeftImg} className="button__icon" />
            </button>
            <button
              className="button button_justify"
              onClick={handleRowDirection}
            >
              <img alt="" src={JustifyImg} className="button__icon" />
            </button>
          </div>
        </div>
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
      </div>

      <div className="content-wrapper content-wrapper_justify">
        <div className="button-wrapper ">
          <button className="button button_apply" onClick={handleShowForm}>
            Применить
          </button>
          <button className="button " onClick={handleCancelForm}>
            Отмена
          </button>
        </div>
        <Popup
          trigger={
            <div>
              <button className="button button_clear">
                <img alt="" src={CloseImg} className="button__icon" />
                <span>Очистка</span>
              </button>
            </div>
          }
          position="bottom"
        >
          {(close) => (
            <div className="popup-clear">
              <div className="popup-clear__text">Очистить форму?</div>
              <div className="popup-clear__button-wrapper">
                <button className="popup-clear__button" onClick={close}>
                  Нет
                </button>
                <button
                  className="popup-clear__button popup-clear__button_accept"
                  onClick={() => {
                    setTags([]);
                    close();
                  }}
                >
                  Да
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </main>
  );
}
