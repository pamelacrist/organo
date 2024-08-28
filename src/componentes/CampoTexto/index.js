import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  const aoDigitar = (evento) => {
    console.log(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={placeholderModificado}
        type="text"
      ></input>
    </div>
  );
};

export default CampoTexto;
