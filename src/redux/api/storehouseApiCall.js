import { storehouseActions } from "../storehouse-slice";

export const fetchAllStorehouses = async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8080/storehouses");
    const result = await response.json();
    dispatch(storehouseActions.getAllStorehouses(result));
  } catch (error) {
    console.log(error);
  }
};
