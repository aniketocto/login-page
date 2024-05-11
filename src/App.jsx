import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex flex-col justify-center items-center text-[60px] font-bold">
                <h1>My Account</h1>
                <hr className="w-full border border-gray-500" />
              </div>
              <SignIn />
            </>
          }
        />
        <Route
          path="/sign-in"
          element={
            <>
              <div className="flex flex-col justify-center items-center text-[60px] font-bold">
                <h1>My Account</h1>
                <hr className="w-full border border-gray-500" />
              </div>
              <SignIn />
            </>
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
