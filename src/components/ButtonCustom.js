const ButtonCustom = ({ className, onClick, id, text, disabled }) => {
  return (
    <div>
      <button
        className={`buttonCustom ${className && className}`}
        disabled={disabled}
        onClick={onClick}
        id={id}
      >
        {text}
      </button>
    </div>
  );
};
export default ButtonCustom;
