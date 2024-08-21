import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div>
      <label> {props.label}</label>
      <select>
        <option value="">{props.placeholder}</option>
      </select>
    </div>
  );
};

export default ListaSuspensa;
