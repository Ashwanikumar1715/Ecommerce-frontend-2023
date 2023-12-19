import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Admin/Components/Admin";
const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default AdminRouter;
