import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className="p-5 shadow-1g border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[Srem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70 mt-2">Size: L,White</p>
          <div className="flex space-x-5 items-center pt-6 text-gray-900 mt-6">
            <p className="opacity-50 line-through">211 </p>
            <p className="text-green-600 font-semibold">5% Off</p>
            <p className="font-semibold">199</p>{" "}
          </div>
        </div>
        
      </div>
      <div className="lg:flex items-center lg:space-x-16 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3  </span>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
          
          </div>
          <div>
            <Button>remove</Button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
