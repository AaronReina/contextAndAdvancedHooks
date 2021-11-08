import { FORMAT_ERROR } from "./responseConstants";
import CustomException from "./customError";

const resToJSON = async (res) => {
  try {
    const responseData = await res.json();
    return responseData;
  } catch (e) {
    throw new CustomException(res.statusText, {
      text: FORMAT_ERROR,
      status: 500,
    });
  }
};

export default resToJSON;
