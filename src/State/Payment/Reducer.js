import {
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_FAILURE,
  } from "./Actiontype";
  
  const initialState = {
    createPaymentLoading: false,
    createPaymentError: null,
    updatePaymentLoading: false,
    updatePaymentError: null,
  };
  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PAYMENT_REQUEST:
        return {
          ...state,
          createPaymentLoading: true,
          createPaymentError: null,
        };
      case CREATE_PAYMENT_FAILURE:
        return {
          ...state,
          createPaymentLoading: false,
          createPaymentError: action.payload,
        };
      case UPDATE_PAYMENT_REQUEST:
        return {
          ...state,
          updatePaymentLoading: true,
          updatePaymentError: null,
        };
      case UPDATE_PAYMENT_FAILURE:
        return {
          ...state,
          updatePaymentLoading: false,
          updatePaymentError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default paymentReducer;
  