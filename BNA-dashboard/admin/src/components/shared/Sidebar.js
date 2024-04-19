import React from "react";
import Logo from "./Logo";

const Sidebar = () => {
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="sidebar">
      <Logo />
      <ul>
        <li>
          <a href="/BNA-BANK/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/BNA-BANK/transactions">Transactions</a>
        </li>
        <li>
          <a href="/BNA-BANK/virements">Virements</a>
        </li>
        <li>
          <a href="/BNA-BANK/historique">Historique</a>
        </li>
      </ul>
      <button onClick={logout} className="logout">
        Se déconnecter
      </button>
    </div>
  );
};

export default Sidebar;
