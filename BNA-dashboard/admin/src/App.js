// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/shared/Sidebar";
import Navbar from "./components/shared/Navbar";
import "./App.css";
import Auth from "./components/login/Auth";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Transactions } from "./components/dashboard/Transactions";
import { Virement } from "./components/dashboard/Virement";
import { Historique } from "./components/dashboard/Historique";
import Signup from "./components/login/Signup";
import { ModifierVirement } from "./components/virement/ModifierVirement";

//déclaration du composant principal
const App = () => {
  return (
    <div className="app">
        <Routes>
          {/* Route for the authentication layout */}
          <Route path="/auth/*" element={<AuthLayout />} />

          {/* Route for the dashboard layout */}
          <Route path="/BNA-BANK/*" element={<DashboardLayout />} />

          <Route path="/" element={<Navigate to="/auth/login" />} />

        </Routes>
    </div>
  );
};

//déclaration du auth layout

const AuthLayout = () => {
  return (
    <>
      <div className="content-auth">
        <Routes>
          <Route path="/register" element={<Signup />} /> {/* Route for the login page */}
          <Route path="/login" element={<Auth />} /> {/* Route for the login page */}
        </Routes>
      </div>
    </>
  );
};

//déclaration du dashboard layout
const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
      <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/virements" element={<Virement />} />  
          <Route path="/:id" element={<ModifierVirement />} />  
          <Route path="/historique" element={<Historique />} /> 
        </Routes>
      </div>

    </>
  );
};

export default App;
