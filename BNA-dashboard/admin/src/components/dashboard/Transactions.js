import React, { useEffect } from "react";

export const Transactions = () => {

    //appliquer un effet secondaire pour changer le nom de l'onglet dans la navigation
  //Rappel useEffect est un hook qui permet de charger les données dés que le composant est chargé dans la navigateur

  useEffect(() => {
    return () => {
      document.title = "BNA - Transactions";
    };
  }, []);
  return (
    <div>
      <div className="table-container">
        <h2 className="title_table">Transactions</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Code Client</th>
              <th>Prénom</th>
              <th>Nom de famille</th>
              <th>CIN</th>
              <th>Email</th>
              <th>Numéro de téléphone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>BNA-C001</td>
              <td>John </td>
              <td>Doe</td>
              <td>********</td>
              <td>john@example.com</td>
              <td>1234567890</td>
              <td className="colA">
                <a className="edit">
                  <i className="fa fa-edit " />
                </a>
                {"  "}
                <button className="slash">
                  <i className="fa fa-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>BNA-C001</td>
              <td>John </td>
              <td>Doe</td>
              <td>********</td>
              <td>john@example.com</td>
              <td>1234567890</td>
              <td className="colA">
                <a className="edit">
                  <i className="fa fa-edit " />
                </a>
                {"  "}
                <button className="slash">
                  <i className="fa fa-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>BNA-C001</td>
              <td>John </td>
              <td>Doe</td>
              <td>********</td>
              <td>john@example.com</td>
              <td>1234567890</td>
              <td className="colA">
                <a className="edit">
                  <i className="fa fa-edit " />
                </a>
                {"  "}
                <button className="slash">
                  <i className="fa fa-trash" />
                </button>
              </td>
            </tr>
            <tr>
              <td>BNA-C001</td>
              <td>John </td>
              <td>Doe</td>
              <td>********</td>
              <td>john@example.com</td>
              <td>1234567890</td>
              <td className="colA">
                <a className="edit">
                  <i className="fa fa-edit " />
                </a>
                {"  "}
                <button className="slash">
                  <i className="fa fa-trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
