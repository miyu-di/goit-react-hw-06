import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p className={css.parag}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
