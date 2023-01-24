import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
// Components
import Dashboard from "./modules/Dashboard/Dashboard";
import SignIn from "./modules/SignIn/SignIn";
import SignUp from "./modules/SignUp/SignUp";
import UserProfile from "./modules/UserProfile/UserProfile";
import Main from "./modules/Main/Main";
import AccessDenied from "./components/AccessDenied/AccessDenied"
import ProtectedRoutes from './components/ProTectedRoute/ProTectedRoute'
import ProtectedloginRoutes from './components/ProtectLoginRoute/ProtectLoginRoute'

const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* MenuItem Routes */}
          <Route element={<ProtectedloginRoutes/>}>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          </Route>
          <Route element={<ProtectedRoutes/>}>
          <Route path="/profile" element={<Main />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/edit_profile" element={<UserProfile />}></Route>
          </Route>
          <Route
            path="/not-found"
            element={<h1 className="text-white">Not found</h1>}
          />

          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
