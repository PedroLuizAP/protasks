import Task from "./pages/tasks/Task";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Custumer from './pages/custumer/Custumer';
import Dashboard from "./pages/dashboard/Dashboard";
import CustumerForm from './pages/custumer/CustumerForm';
import PageNotFound from './pages/dashboard/PageNotFound';
import React from "react";

const App: React.FC  = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/custumer/*" element={<Custumer/>} />
      <Route path="/custumer/detail/" element={<CustumerForm/>} />
      <Route path="/custumer/detail/:id" element={<CustumerForm/>} />
      <Route path="/tasks/*" element={<Task/>} />
      <Route element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
