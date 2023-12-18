import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { updatePayment } from "../../../State/Payment/Action";
import AddressCard from "./AddressCard";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTraker from "../../Order/OrderTraker";

const PaymentSucces = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState(); // Corrected the variable name
  const [paymentStatus, setPaymentStatus] = useState(); // Corrected the variable name
  const { orderId } = useParams(); // Corrected the syntax for extracting orderId
  const dispatch = useDispatch();
  const order = useSelector((store) => store); // Adjusted the syntax for useSelector

  console.log("order ", order.order);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_status")); // Corrected the parameter name
  }, []); // Removed unnecessary square brackets

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId]);
  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations! Your Order Has Been Placed
        </Alert>
        </div>
        <OrderTraker activeStep={1} />
        <Grid container className="space-y-5 py-5 pt-20">
          {order.order?.orderItems.map((item) => (
            <Grid
              container
              item
              className=""
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src={item.product.image}
                    alt={item.product.title}
                  />
                  <div className="ml-5 space-y-2">
                    <p>{item.product.title}</p>
                    <div className="opacity-50 text-xs font-semibold space">
                      <span>Size: {item.size}</span>
                    </div>
                    <p>Seller: {item.product.brand}</p>
                    <p> {item.price}</p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <AddressCard address={order.order?.shippingAddress} />
              </Grid>
            </Grid>
          ))}
        </Grid>
     
    </div>
  );
};

export default PaymentSucces;
