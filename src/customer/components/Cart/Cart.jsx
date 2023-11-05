import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate=useNavigate();

  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
         {
            [1,1,1,1].map((item)=> <CartItem />)
         }
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              {/* Content for price details goes here */}
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>4697</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-3419</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600 font-bold">1278</span>
              </div>
            </div>
            <Button onClick={handleCheckout}
                  variant="contained"
                  className="w-full mt-5"
                  sx={{
                    mt: "1rem",
                    px: "2.5rem",
                    py: ".7rem",
                    bgcolor: "#9155fd",
                  }}
                >
                 
                  Checkout
                </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
