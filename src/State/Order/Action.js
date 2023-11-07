import { API_BASE_URL, api } from "../../config/apiConfig";
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
    const { data } = await api.post(
      `${API_BASE_URL}/api/orders`,
      reqData.address
    );

    if (data.id) {
      reqData.navigate({ search: `step=3&order_id=${data.id}` });
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
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("Order by ID: ", data);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error: ", error);
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
        error: null,
      };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case GET_ORDER_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        error: null,
      };
    case GET_ORDER_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
