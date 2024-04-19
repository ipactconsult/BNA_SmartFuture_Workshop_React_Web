import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/api"; // Importation de l'instance Axios configurée

const initialState = {
  loading: false,
  isSuccess: false,
  profile: null, 
  errors: [],
};

// Création d'une action asynchrone pour l'inscription
export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const params = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.lastname,
        phone_number: data.lastname,
        CIN: data.lastname,
        password: data.lastname,
      };
      const response = await api.post("/auth/register", params);
      // Rediriger vers la page de connexion après l'inscription réussie
      window.location.href="/auth/login";
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// Création d'une action asynchrone pour la connexion
export const signin = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const params = { email: body.email, password: body.password };
      const response = await api.post("/auth/login", params);

      // Stocker les données dans localStorage
      localStorage.setItem("token", response.data.token);
      window.location.href="/BNA-BANK/dashboard";
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// Création d'une action asynchrone pour récupérer le profil de l'utilisateur
export const getProfile = createAsyncThunk(
  'auth/profile',
  async (__, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.get(`/user/get`);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// Création du slice pour gérer l'authentification
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}, // Les reducers peuvent être ajoutés ici si nécessaire
  extraReducers: (builder) => {
    builder
      // Gestion des actions pour l'inscription
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.loading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isSuccess = false;
        state.loading = false;
      })
      // Gestion des actions pour la connexion
      .addCase(signin.pending, (state) => {
        state.loading = true;
      })
      .addCase(signin.fulfilled, (state, payload) => {
        state.isSuccess = true;
        if (!payload?.token) {
          state.isSuccess = false;
          state.errors = ['AccessToken not found'];
        } else {
          state.token = payload.token;
          const decodedToken = jwt_decode(payload.token);
          state.email = decodedToken.email;
        }
        state.loading = false;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isSuccess = false;
        state.loading = true;
      })
      // Gestion des actions pour récupérer le profil de l'utilisateur
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload; 
      });
  },
});

export default authSlice.reducer;
