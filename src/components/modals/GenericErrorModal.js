const GenericErrorModal = ({ text, status, resetError }) => (
  <div className="modal centerAbsolute">
    <img
      src="https://100dayscss.com/codepen/alert.png"
      alt="error"
      width="44"
      height="38"
    />
    <span className="title">{text}</span>
    <p>{status}</p>
    <button onClick={resetError} className="button">
      Cerrar
    </button>
  </div>
);

export default GenericErrorModal;
