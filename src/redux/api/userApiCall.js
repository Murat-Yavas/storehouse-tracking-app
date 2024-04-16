import { userActions } from "../user-slice";

export const sendAuthRequest = async (dispatch, body, path) => {
  console.log("giris");
  try {
    const response = await fetch(`http://localhost:8080/auth/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    const resultItem = [
      localStorage.setItem("tokenKey", result.message),
      localStorage.setItem("currentUser", result.userId),
    ];
  } catch (error) {
    console.log(error);
  }
};
