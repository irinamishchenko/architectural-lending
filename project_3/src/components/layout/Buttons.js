import sprite from "./../../images/sprite.svg";

function Buttons(props) {
  return (
    <div className="list-buttons">
      <button
        className={
          props.offset > 0 ? "list-button" : "list-button list-button-inactive"
        }
        onClick={() => props.onPrevClick()}
      >
        <svg>
          <use href={sprite + "#arrow-icon"} />
        </svg>
      </button>

      <button
        className={
          props.offset + props.limit < props.total
            ? "list-button"
            : "list-button list-button-inactive"
        }
        onClick={() => props.onNextClick()}
      >
        <svg>
          <use href={sprite + "#arrow-icon"} />
        </svg>
      </button>
    </div>
  );
}

export default Buttons;
