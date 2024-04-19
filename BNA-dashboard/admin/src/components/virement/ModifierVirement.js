import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateVirement, getVirement } from "../../redux/virementSlice";
import { useParams } from "react-router-dom";

export const ModifierVirement = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedVirement = useSelector((state) => state?.virements?.selected);

  const [formData, setFormData] = useState({
    _id: "",
    beneficiaire: "",
    montant: "",
    date: "",
    description: "",
  });

  const [touchedFields, setTouchedFields] = useState({});

  useEffect(() => {
    if (id) {
      dispatch(getVirement(id));
    }
  }, [id]);

  useEffect(() => {
    if (selectedVirement) {
      setFormData({
        _id: selectedVirement._id || "",
        beneficiaire: selectedVirement.beneficiaire || "",
        montant: selectedVirement.montant || "",
        date: selectedVirement.date || "",
        description: selectedVirement.description || "",
      });
    }
  }, [selectedVirement]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData === null) {
      console.log("champs requis");
    } else {
      console.log("form data" + JSON.stringify(formData));
      console.log("id"+JSON.stringify(id));
      dispatch(updateVirement(formData));
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <div>
      <h2>Formulaire de Modification de Virement</h2>
      <form style={{width: 1100}} className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="beneficiaire">Bénéficiaire:</label>
          <input
            className="input-value "
            type="text"
            id="beneficiaire"
            name="beneficiaire"
            value={formData?.beneficiaire}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          {touchedFields.beneficiaire && !formData.beneficiaire && (
            <span style={{ color: "red" }}>Ce champ est obligatoire</span>
          )}
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
          {touchedFields.montant && !formData.montant && (
            <span style={{ color: "red" }}>Ce champ est obligatoire</span>
          )}
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <small><b> current {formatDate(formData.date)}</b></small>
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
          {touchedFields.date && !formData.date && (
            <span style={{ color: "red" }}>Ce champ est obligatoire</span>
          )}
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
          {touchedFields.description && !formData.description && (
            <span style={{ color: "red" }}>Ce champ est obligatoire</span>
          )}
        </div>

        <button type="submit">Enregistrer les modifications</button>
      </form>
    </div>
  );
};
