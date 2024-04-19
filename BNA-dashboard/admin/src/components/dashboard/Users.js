import React, { useEffect } from "react";

export const Users = () => {
    //appliquer un effet secondaire pour changer le nom de l'onglet dans la navigation
  //Rappel useEffect est un hook qui permet de charger les données dés que le composant est chargé dans la navigateur

    useEffect(()=>{
        return(()=>{
            document.title = "BNA - Utilisateurs";
        })
     },[]);
  return (
    <div>
      <div className="table-container">
        <h2 className="title_table">Utilisateurs</h2>
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
              <td>
              <button className="view"><i className="fa fa-eye"/></button> <button className="edit"><i className="fa fa-edit "/></button> <button className="slash"><i className="fa fa-eye-slash"/></button>
              </td>
            </tr>
            <tr>
              <td>BNA-C001</td>
              <td>John </td>
              <td>Doe</td>
              <td>********</td>
              <td>john@example.com</td>
              <td>1234567890</td>
              <td>
              <button className="view"><i className="fa fa-eye"/></button> <button className="edit"><i className="fa fa-edit "/></button> <button className="slash"><i className="fa fa-eye-slash"/></button>
              </td>
            </tr>
            <tr>
              <td>BNA-C001</td>
              <td>John </td>
              <td>Doe</td>
              <td>********</td>
              <td>john@example.com</td>
              <td>1234567890</td>
              <td>
              <button className="view"><i className="fa fa-eye"/></button> <button className="edit"><i className="fa fa-edit "/></button> <button className="slash"><i className="fa fa-eye-slash"/></button>
              </td>
            </tr>
            <tr>
              <td>BNA-C001</td>
              <td>John </td>
              <td>Doe</td>
              <td>********</td>
              <td>john@example.com</td>
              <td>1234567890</td>
              <td>
              <button className="view"><i className="fa fa-eye"/></button> <button className="edit"><i className="fa fa-edit "/></button> <button className="slash"><i className="fa fa-eye-slash"/></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
