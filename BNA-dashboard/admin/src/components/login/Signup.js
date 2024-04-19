// Login.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/authSlice";
import Logo from "../shared/Logo";

export const Error = () => {
  return <p>Vérifiez vos données</p>;
};

const Signup = () => {
  const dispatch = useDispatch(); //déclarer useDispatch
  const isLoading = useSelector((state) => state.auth.loading); //récupérer l'état de chargement
  const isSuccess = useSelector((state) => state.auth.isSuccess); // récupérer l'état de succés de la requete
  const errors = useSelector((state) => state.auth.errors); // récupération des erreurs

  //déclaration d'un objet formData qui contient les champs
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  //gestion de l'événement des éléments dans l'objet
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //fonction qui va soumettre les données
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData));

    // cette ligne va permettre d'envoyer une action pour ajouter un utilisateur dans le système en passant la partie redux spécifiquement par slice dans le reducer
  };

  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <Logo />
          <h2>Créer un compte</h2>
          <div className="form-group">
            <label htmlFor="firstname">Prénom :</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Entrez votre prénom"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Nom de famille :</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Entrez votre nom de famille"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Chargement..." : "S'inscrire"}
          </button>
          {isSuccess && <p>Inscription réussie !</p>}
          {errors && <p style={{color:"red"}}>{errors}</p>}
          <br />
          <a href="/auth/login">Se connecter</a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
