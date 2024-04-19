import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice'; // Importation du slice de gestion de l'authentification
import virementSlice from './virementSlice'; // Importation du slice de gestion des virements

// Configuration du store Redux
export const store = configureStore({
  reducer: {
    auth: authSlice, // Ajout du slice de gestion de l'authentification au store sous le nom "auth"
    virements: virementSlice // Ajout du slice de gestion des virements au store sous le nom "virements"
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactivation de la vérification de sérialisation pour permettre l'utilisation de types non sérialisables comme les fonctions dans le store
    }),
});
