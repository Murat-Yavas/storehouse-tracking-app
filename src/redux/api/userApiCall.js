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

    const resultItem = [
      localStorage.setItem("tokenKey", result.accessToken),
      // localStorage.setItem("refreshKey", result.refreshToken),
      localStorage.setItem("currentUser", result.userId),
      localStorage.setItem("userName", result.userName),
    ];
    dispatch(userActions.saveUser(result));
  } catch (error) {
    console.log(error);
  }
};

// export const refreshToken = () => {
//   try {
//     const response = fetch("http://localhost:8080/auth/refresh", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId: localStorage.getItem("currentUser"),
//         refreshToken: localStorage.getItem("refreshKey"),
//       }),
//     });
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
