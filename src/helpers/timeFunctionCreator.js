const timeFunctionCreator = (funcion, tiempo) => {
  let isWorking = false;
  let responseDebounce;
  const timer = (param) => setTimeout(() => internalFunction(param), tiempo);

  const internalFunction = (param) => {
    funcion(param);
    isWorking = false;
  };

  const limited = async (param) => {
    if (isWorking) {
      return;
    }
    isWorking = true;

    const reponse = await timer(param);
    return reponse;
  };

  const debounce = async (param) => {
    clearTimeout(responseDebounce);
    responseDebounce = await timer(param);
    return responseDebounce;
  };

  return Object.freeze({
    limited,
    debounce,
  });
};

export { timeFunctionCreator };
