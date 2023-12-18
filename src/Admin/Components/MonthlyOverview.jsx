import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import React from "react";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
const salesData = [
  {
    stats: "245K",
    tittle: "Sales",
    color: "#FFF222",
    icon: <TrendingUpIcon sx={{ fontSize: "1.5rem" }} />,
  },
  {
    stats: "12.5K",
    tittle: "Customers",
    color: "#019031",
    icon: <AccountCircleIcon sx={{ fontSize: "1.5rem" }} />,
  },
  {
    stats: "1.5K",
    tittle: "Products",
    color: "#E8290B",
    icon: <AppSettingsAltIcon sx={{ fontSize: "1.5rem" }} />,
  },
  {
    stats: "88K",
    tittle: "Revenue",
    color: "#74B9FF",
    icon: <CurrencyRupeeIcon sx={{ fontSize: "1.5rem" }} />,
  },
];

const renderState = () => {
    return salesData.map((item, index) => (
      <Grid item xs={12} sm={3} key={index}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 44,
              boxShadow: 3,
              color: "white",
              background: `${item.color}`,
            }}
          >
            {item.icon}
          </Avatar>
  
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="caption">
              {item.tittle}
            </Typography>
            <Typography variant="h6">
              {item.stats}
            </Typography>
          </Box>
        </Box>
      </Grid>
    ));
  };
  
  const MonthlyOverview = () => {
    return (
      <div>
        <Card sx={{bgcolor:"#333945", color:"white"}}>
          <CardHeader
            title="monthly overview"
            action={
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            }
            subheader={
              <Typography variant="body2">
                <Box component="span" sx={{ fontWeight: 600}}>
                  Total 45.5% growth
                </Box>
                {' '}
                👌this month
              </Typography>
            }
            titleTypographyProps={{
              sx: {
                mb: 2.5,
                lineHeight: "3rem !important",
                letterSpacing: ".15px !important"
              }
            }}
          />
          <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
            <Grid container spacing={[5, 0]}>
              {renderState()}
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  };

export default MonthlyOverview;
