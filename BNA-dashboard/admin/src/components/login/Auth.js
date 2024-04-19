import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/authSlice";
import Logo from "../shared/Logo";

const Auth = () => {
  const dispatch = useDispatch();

  //déclaration d'un état de type objet qui contient les états (email & password)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //créer un état pour gérer si la saisie de l'email est valide ou pas
  const [emailError, setEmailError] = useState("");
  

  //Traitement des états (email && password) dans un objet
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation de l'e-mail à chaque changement
    if (name === "email") {
      setEmailError(validateEmail(value));
    }
  };

  //action sur le bouton de connexion (signin form)
  const handleSubmit = (e) => {
    e.preventDefault();
    //appel de la logique de redux (connexion)
    dispatch(signin(formData));
  };

  // Fonction de validation d'e-mail
  const validateEmail = (email) => {
    // Expression régulière pour valider l'e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Adresse e-mail invalide";
    }
    return "";
  };

  // rendu du composant login
  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <Logo />
          <h2>Connexion</h2>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              style={{ borderColor: emailError ? "red" : "" }} // Changer la couleur de la bordure si une erreur est présente
            />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>} {/* Afficher le message d'erreur */}
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
            />
          </div>
          <button type="submit">Se connecter</button>
          <br />
          <a href="/auth/register">Créer un compte</a>
        </form>
      </div>
    </div>
  );
};

export default Auth;
