import Manager from "./Manager";
import { Route, Routes } from "react-router-dom";

import React from 'react'
import EmpDetails from "./EmpDetails";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Manager />} />
        <Route path="/emp-details" element={<EmpDetails /> } />
      </Routes>
    {/* <Manager />
    <EmpDetails /> */}
    </div>
)
}

export default Main