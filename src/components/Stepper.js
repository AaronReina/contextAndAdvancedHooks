const Stepper = ({ steps, actualStep }) => {
  const getStep = (keyId, stateStep, text, action) => {
    return (
      <div
        key={keyId}
        onClick={action && action}
        className={`step ${stateStep}`}
      >
        <div className="step-label"></div>
        <div className="step-description">{text}</div>
      </div>
    );
  };

  const createSteper = () => {
    const stepper = [];
    let classToApply;
    steps.forEach((e, i) => {
      if (i === actualStep) {
        classToApply = "active";
      } else if (i < actualStep) {
        classToApply = "completed";
      } else {
        classToApply = "";
      }
      stepper.push(getStep(i, classToApply, e.text, e.action));
    });
    return stepper;
  };

  return <div className="stepper">{createSteper()}</div>;
};

export default Stepper;
