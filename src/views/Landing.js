import { useContext, useRef, useState, useCallback, useMemo } from "react";
import ButtonCustom from "../components/ButtonCustom";
import InputCustom from "../components/InputCustom";
import Stepper from "../components/Stepper";
import GlobalControlContext from "../context/GlobalControl/GlobalControlContext";

const Landing = () => {
  const { setSpinner, setError, getData, spinner, resetError, data } =
    useContext(GlobalControlContext);
  const inputRefTest = useRef();
  const [errorInput, setErrorInput] = useState(false);
  const testButton = useCallback((pepe) => {
    console.log("hola");
    if (pepe) {
      console.log(pepe);
    }
  }, []);

  return (
    <div>
      <button onClick={() => setSpinner(!spinner)}>test spinner</button>
      <button onClick={() => setError(400, "funciona ok")}>test error</button>
      <button onClick={() => resetError()}>test error reset</button>
      <button onClick={() => getData()}>test data</button>
      <button onClick={() => console.log(inputRefTest?.current?.value)}>
        ref value
      </button>
      <button onClick={() => setErrorInput(!errorInput)}>error </button>
      <button onClick={() => inputRefTest?.current?.subiendo()}>
        de abajo parriba{" "}
      </button>

      <button onClick={() => console.log(inputRefTest)}>referencia </button>

      {data?.test ? <p>{data.test}</p> : <p>no va</p>}
      <InputCustom
        errorText="Fallo de algo"
        error={errorInput}
        ref={inputRefTest}
        id="1"
        type="text"
        label="cosas aqui"
      />
      {useMemo(
        () => (
          <ButtonCustom onClick={testButton} text="pulsame" />
        ),
        [testButton]
      )}
      {useMemo(
        () => (
          <Stepper
            steps={[
              { text: "paso1", action: () => testButton("paso1") },
              { text: "paso2", action: () => testButton("paso2") },
              { text: "paso3", action: () => testButton("paso3") },
              { text: "paso4", action: () => testButton("paso4") },
              { text: "paso5", action: () => testButton("paso5") },
              { text: "paso6", action: () => testButton("paso6") },
              { text: "paso7", action: () => testButton("paso7") },
            ]}
            actualStep={2}
          />
        ),
        [testButton]
      )}
    </div>
  );
};

export default Landing;
