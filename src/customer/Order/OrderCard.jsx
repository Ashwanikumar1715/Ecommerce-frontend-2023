import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/kw5ag7k0/kurta/f/j/g/xxl-sg1011-sanganeri-feb-original-imag8w9xbbakjkju.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-58 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
<Grid item xs={2}>
    <p>1099</p>
</Grid>
<Grid item xs={4}>
{
    true&&<div>
        <p>
        <AdjustIcon className="text-green-600 mr-2 text-sm" sx={{width:"15px", height:"15px"}}/>
    <span>
        Deliverde on 3rd march
    </span>
</p>
<p className="text-xs">
    your item has been delivered
</p>
    </div>
}
{
    false&&<p>
    <span>
       expected Delivery on 3rd march
    </span>
</p>
}

</Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
