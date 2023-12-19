import React from "react";
import { Button, Card, CardContent, Typography, styled } from "@mui/material";

const TringleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 28,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
    <Card sx={{ position: "relative", bgcolor: "#333945", color: "white" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop with AshwaniMart
        </Typography>
        <Typography variant="body2"> Congratulations</Typography>
        <Typography variant="h5" sx={{ my: 4 }}>
          200.k
        </Typography>

        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TringleImg src=""></TringleImg>
        <TrophyImg src="https://cdn.pixabay.com/photo/2015/10/28/16/46/cup-1010909_960_720.jpg"></TrophyImg>
      </CardContent>
    </Card>
  );
};

export default Achivement;
