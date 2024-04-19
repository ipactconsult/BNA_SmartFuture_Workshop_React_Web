import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVirement } from "../../redux/virementSlice";

export const Virement = () => {
  const dispatch = useDispatch();

  //déclarer l'objet formData
  const [formData, setFormData] = useState({
    beneficiaire: "",
    montant: "",
    date: "",
    description: ""
  });

  //déclarer un state pour tester si le champ est activé ou pas
  const [touchedFields, setTouchedFields] = useState({});

  //gestion d'état de l'objet (élements)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  //tester le focus de l'input dans cette fonction
  const handleFocus = (e) => {
    const { name } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  //créer la fonction d'ajout
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData === null){
      console.log("champs requis");
    }else {
      dispatch(addVirement(formData)); 
    }
    // Dispatch de l'action addVirement avec les données du formulaire
  };



  return (
    <div className="form">
      <h2>Formulaire de Virement</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="beneficiaire">Bénéficiaire:</label>
          <input
            className="input-value"
            type="text"
            id="beneficiaire"
            name="beneficiaire"
            value={formData.beneficiaire}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          {touchedFields.beneficiaire && !formData.beneficiaire && <span style={{ color: 'red' }}>Ce champ est obligatoire</span>}
        </div>

        <div>
          <label htmlFor="montant">Montant:</label>
          <input
            className="input-value"
            type="number"
            id="montant"
            name="montant"
            value={formData.montant}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          {touchedFields.montant && !formData.montant && <span style={{ color: 'red' }}>Ce champ est obligatoire</span>}
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input
            className="input-value"
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          {touchedFields.date && !formData.date && <span style={{ color: 'red' }}>Ce champ est obligatoire</span>}
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            className="textarea-value"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onFocus={handleFocus}
            rows="4"
            required
          ></textarea>
          {touchedFields.description && !formData.description && <span style={{ color: 'red' }}>Ce champ est obligatoire</span>}
        </div>

        
        <button type="submit">Effectuer le virement</button>
      </form>
    </div>
  );
};
