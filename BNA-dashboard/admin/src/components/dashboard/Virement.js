// Virement.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteVirement, fetchVirement } from "../../redux/virementSlice";

export const Virement = () => {
  const dispatch = useDispatch(); //déclaration de la méthode useDispatch()
  const virements = useSelector((state) => state?.virements?.virement); // récupérer la liste des données avec useSelector
  const loading = useSelector((state) => state?.virements?.loading); // récupérer l'état de données pour tester la réception de l'affichage des données

  useEffect(() => {
    dispatch(fetchVirement()); //useDispatch permet d'envoyer une action pour récupérer les données à partir du slice fetchVirement dans le reducer
  }, [dispatch]);

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

    // appel de l'action de suppression à partir du slice
    const handleDelete = (_id) => {
          //Dispatch la fonction pour lancer l'action lors du clic
          dispatch(deleteVirement(_id));
          //lancer une alerte indiquant le succés de l'action
          dispatch(fetchVirement());
    }
    
  return (
    <div>
      <div className="table-container">
        <h2 className="title_table">Virements</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "33%" }}>Beneficiaire</th>
                <th style={{ width: "33%" }}>Montant</th>
                <th style={{ width: "33%" }}>Date</th>
                <th style={{ width: "33%" }}>Description</th>
                <th style={{ width: "33%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {virements?.map((virement) => (
                <tr key={virement?.DT_RowId}>
                  <td>{virement.beneficiaire}</td>
                  <td>{virement.montant}</td>
                  <td>{formatDate(virement.date)}</td>
                  <td>{virement.description}</td>
                  <td className="colA">
                  
                    <a href={`/BNA-BANK/${virement?._id}`} className="edit">
                      <i className="fa fa-edit " />
                    </a>
                    {"  "}
                    <button onClick={()=>{handleDelete(virement?._id)}} className="slash">
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
