import CustomException from "./helpers/customError";
import resToJSON from "./helpers/resToJSON";
const baseURL = "";

const getBasic = async (route) => {
  const direction = baseURL + route;
  const res = await fetch(direction);
  const responseData = await resToJSON(res);
  if (res.ok) {
    return responseData;
  } else {
    throw new CustomException(res.statusText, {
      text: res.statusText,
      status: res.status,
    });
  }
};

const postBasic = async (route, data) => {
  const direction = baseURL + route;
  const res = await fetch(direction, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await resToJSON(res);
  if (res.ok) {
    return responseData;
  } else {
    throw new CustomException(res.statusText, {
      text: res.statusText,
      status: res.status,
    });
  }
};
export { getBasic, postBasic };
