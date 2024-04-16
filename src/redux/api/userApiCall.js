import { userActions } from "../user-slice";

export const sendAuthRequest = async (dispatch, body, path) => {
  try {
    const response = await fetch(`http://localhost:8080/auth/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
};
