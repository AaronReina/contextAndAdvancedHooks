import { forwardRef } from "react";
// import { useImperativeHandle } from "react";

const InputCustom = forwardRef(
  (
    {
      className,
      error,
      type,
      id,
      text,
      label,
      placeholder,
      disabled,
      errorText,
      required,
    },
    ref
  ) => {
    // const subiendo = () => {
    //   console.log("me declaro abajo y subo!");
    // };
    // useImperativeHandle(ref, () => ({
    //   subiendo,
    // }));

    return (
      <div>
        <label className="labelCustom" htmlFor={id}>
          {label}
        </label>
        <input
          className={`imputCustom ${error && "imputCustomError"}`}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          id={id}
          type={type}
          required={required}
        >
          {text}
        </input>
        {error && <p className="errorTextCustom">{errorText}</p>}
      </div>
    );
  }
);

export default InputCustom;
