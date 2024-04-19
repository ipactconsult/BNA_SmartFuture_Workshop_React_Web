import React, { useEffect } from "react";
import { Virement } from "../virement/Virement";

export function Dashboard() {
  //appliquer un effet secondaire pour changer le nom de l'onglet dans la navigation
  //Rappel useEffect est un hook qui permet de charger les données dés que le composant est chargé dans la navigateur

  useEffect(() => {
    return () => {
      document.title = "BNA - Dashboard";
    };
  }, []);

  return (
    <div>
      <div className="display_card">
        <div className="card">
          <h2>Solde du compte</h2>
          <h1>300 TND</h1>
        </div>

        <div className="card">
          <h2>Transactions</h2>
          <h1>100</h1>
        </div>

        <div className="card">
          <h2>Virements</h2>
          <h1>60</h1>
        </div>
      </div>
      <Virement />
    </div>
  );
}
