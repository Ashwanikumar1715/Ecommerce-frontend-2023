import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Dashboard from "./Dashboard";
import CreateProductForm from "./CreateProductForm";
import ProductsTable from "./ProductsTable";
import OrdersTable from "./OrdersTable";
import CustomersTable from "./CustomersTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  {
    name: "Addproduct",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="relative flex h-[100vh] ">
      <CssBaseline />

      <div className="w-[15%] border-r-gray-300 fixed top-0">{drawer}</div>
      <div className="w-[85%] h-full ml-[15%]">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/product/create" element={<CreateProductForm />}></Route>
          <Route path="/products" element={<ProductsTable />}></Route>
          <Route path="/orders" element={<OrdersTable />}></Route>
          <Route path="/customers" element={<CustomersTable />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
