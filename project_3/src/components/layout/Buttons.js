import sprite from "./../../images/sprite.svg";

function Buttons(props) {
  const { offset, total, limit, onPrevClick, onNextClick } = props;
  return (
    <div className="list-buttons">
      <button
        className={
          offset > 0 ? "list-button" : "list-button list-button-inactive"
        }
        onClick={() => onPrevClick()}
      >
        <svg>
          <use href={sprite + "#arrow-icon"} />
        </svg>
      </button>

      <button
        className={
          offset + limit < total
            ? "list-button"
            : "list-button list-button-inactive"
        }
        onClick={() => onNextClick()}
      >
        <svg>
          <use href={sprite + "#arrow-icon"} />
        </svg>
      </button>
    </div>
  );
}

export default Buttons;
