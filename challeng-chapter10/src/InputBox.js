import colorName from "colornames";
const InputBox = ({
  color,
  setColor,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="addColorName">Add Color name</label>
      <input
        id="addColorName"
        type="text"
        autoFocus
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorName(e.target.value));
        }}
        placeholder="Add color name"
        required
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        {" "}
        Toggle Text Color
      </button>
    </form>
  );
};

export default InputBox;
