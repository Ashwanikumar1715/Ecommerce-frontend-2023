import "./App.css";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRouter from "./Routers/AdminRouter";
import PageNotFound from "./customer/pages/Homepage/PageNotFound";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
        <Route path="/admin/*" element={<AdminRouter />}></Route>
        <Route path="*" element={<PageNotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
