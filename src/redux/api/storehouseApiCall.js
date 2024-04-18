import { storehouseActions } from "../storehouse-slice";
//import { refreshToken } from "./userApiCall";

export const fetchAllStorehouses = async (dispatch) => {
  dispatch(storehouseActions.toggleIsLoading(true));
  try {
    const response = await fetch("http://localhost:8080/storehouses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("tokenKey"),
      },
    });
    const result = await response.json();
    dispatch(storehouseActions.getAllStorehouses(result));
    dispatch(storehouseActions.toggleIsLoading(false));
    dispatch(storehouseActions.toggleIsError(false));
  } catch (error) {
    dispatch(storehouseActions.toggleIsLoading(false));
    dispatch(storehouseActions.toggleIsError(true));
  }
};

export const fetchOneStorehouse = async (dispatch, storehouseId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/storehouses/${storehouseId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("tokenKey"),
        },
      }
    );
    const result = await response.json();
    dispatch(storehouseActions.getOneStorehouse(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateOneStorehouse = async (dispatch, storehouseId, body) => {
  try {
    const response = await fetch(
      `http://localhost:8080/storehouses/${storehouseId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("tokenKey"),
        },
        body: JSON.stringify(body),
      }
    );
    dispatch(storehouseActions.editOneStorehouse(body));
  } catch (error) {
    console.log(error);
  }
};

export const addOneStorehouse = async (dispatch, body) => {
  try {
    const response = await fetch("http://localhost:8080/storehouses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("tokenKey"),
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    dispatch(
      storehouseActions.createOneStorehouse({ ...result, userId: body.userId })
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneStorehouse = async (dispatch, storehouseId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/storehouses/${storehouseId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("tokenKey"),
        },
      }
    );
    dispatch(storehouseActions.removeOneStorehouse(storehouseId));
  } catch (error) {
    console.log(error);
  }
};
