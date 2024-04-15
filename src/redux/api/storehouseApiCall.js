import { storehouseActions } from "../storehouse-slice";

export const fetchAllStorehouses = async (dispatch) => {
  dispatch(storehouseActions.toggleIsLoading(true));
  try {
    const response = await fetch("http://localhost:8080/storehouses");
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
      `http://localhost:8080/storehouses/${storehouseId}`
    );
    const result = await response.json();
    dispatch(storehouseActions.getOneStorehouse(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateOneStorehouse = async (storehouseId, body) => {
  try {
    const response = await fetch(
      `http://localhost:8080/storehouses/${storehouseId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
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
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    dispatch(storehouseActions.createOneStorehouse(result));
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
      }
    );
    dispatch(storehouseActions.removeOneStorehouse(storehouseId));
  } catch (error) {
    console.log(error);
  }
};
