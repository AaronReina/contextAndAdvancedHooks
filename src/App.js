import { useContext } from "react";
import GlobalControlContext from "./context/GlobalControl/GlobalControlContext";
import GenericErrorModal from "./components/modals/GenericErrorModal";
import Spinner from "./components/Spinner";
import Landing from "./views/Landing";

function App() {
  const { error, spinner, resetError } = useContext(GlobalControlContext);

  return (
    <div>
      <Landing />
      {error?.text && (
        <GenericErrorModal
          text={error.text}
          status={error.status}
          resetError={resetError}
        />
      )}
      {spinner && <Spinner />}
    </div>
  );
}

export default App;
