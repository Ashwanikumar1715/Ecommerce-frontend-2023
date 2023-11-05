import React from "react";
import OrderTraker from "./OrderTraker";
import AddressCard from "../components/AddressCard/AddressCard";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-28">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
      {
        [1,1,1,1].map((item)=>  <Grid
        item
        container
        className="shadow-1 rounded-md p-5 border"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Grid item xs={6}>
          <div className="flex items-center space-x-4">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/kw5ag7k0/kurta/f/j/g/xxl-sg1011-sanganeri-feb-original-imag8w9xbbakjkju.jpeg?q=70"
              alt="Product Image"
            />
            <div className="space-y-2 ml-5">
              <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
              <p className="space-x-5 opacity-50 text-xs font-semibold">
                <span>Color: pink</span>
                <span>Size: M</span>
              </p>
              <p>Seller: Linaria</p>
              <p>*1099</p>
            </div>
          </div>
        </Grid>
        <Grid item>
          <Box sx={{ color: "deepPurple.500" }}>
            <StarBorderIcon sx={{ fontSize: "1.5rem", margin: "2px" }} />
            <span>Rate & Review Product</span>
          </Box>
        </Grid>
      </Grid>)
      }
      </Grid>
    </div>
  );
};

export default OrderDetails;
