import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "../Admin/scenes/dashboard";
import Team from "../Admin/scenes/team";
import Contacts from "../Admin/scenes/contacts";
import Invoices from "../Admin/scenes/invoices";
import Form from "../Admin/scenes/form";
import Pie from "../Admin/scenes/pie";
import Line from "../Admin/scenes/line";
import FAQ from "../Admin/scenes/faq";
import Calendar from "../Admin/scenes/calendar/calendar";
import Geography from "../Admin/scenes/geography";
import Bar from "../Admin/scenes/bar";
import { ColorModeContext, useMode } from "../theme";
import Sidebar from "../Admin/scenes/global/Sidebar";
import Topbar from "../Admin/scenes/global/Topbar";
import CreateProductForm from "../Admin/Components/CreateProductForm";
import OrdersTable from "../Admin/Components/OrdersTable";
import ProductsTable from "../Admin/Components/ProductsTable";



function AdminRouter() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
           <div>
           <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/product/create" element={<CreateProductForm/>}/>
              <Route path="/products" element={<ProductsTable/>}/>
              <Route path="/orders" element={<OrdersTable/>}/>
            </Routes>
           </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AdminRouter;

