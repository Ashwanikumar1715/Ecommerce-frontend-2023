import "./App.css";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRouter from "./Routers/AdminRouter";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
        <Route path="/admin/*" element={<AdminRouter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
