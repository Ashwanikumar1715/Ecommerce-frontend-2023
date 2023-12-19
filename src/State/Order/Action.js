import { api } from "../../config/apiConfig";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionTypes";

// Assuming you have API_BASE_URL defined in your config

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    const { data } = await api.post(`/api/orders`, reqData.address);

    if (data._id) {
      reqData.navigate({ search: `step=3&order_id=${data._id}` });
      console.log("Created order - ", data);
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } else {
      dispatch({
        type: CREATE_ORDER_FAILURE,
        payload: "Failed to create order",
      });
    }
  } catch (error) {
    console.log("catch error", error);
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });

  try {
    console.log("Fetching order by ID: ", orderId);
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("Order by ID: ", data);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error fetching order by ID: ", error);
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};
