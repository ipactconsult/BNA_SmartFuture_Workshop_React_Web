import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Importation d'axios déjà configuré
import api from "../config/api";

// Définition de l'état initial
const initialState = {
  virement: [],
  selected: null,
  recordsTotal: 0,
  loading: false,
  isSuccess: false,
  errors: [],
};

// Création d'une action asynchrone pour récupérer tous les virements
export const fetchVirement = createAsyncThunk(
  "virements/fetchVirement",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/virement/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Création d'une action asynchrone pour ajouter un virement
export const addVirement = createAsyncThunk(
  "virements/addVirement",
  async (bodyData, { rejectWithValue }) => {
    try {
      const response = await api.post("/virement/create", bodyData);
      window.location.href="/BNA-BANK/virements";
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Création d'une action asynchrone pour mettre à jour un virement
export const updateVirement = createAsyncThunk(
  "virements/updateVirement",
  async (body, { rejectWithValue }) => {
    try {
      const { _id, beneficiaire, montant, date, description } = body;
      const params = { beneficiaire, montant, date, description };
      const response = await api.put(`/virement/update/${_id}`, params);
      window.location.href="/BNA-BANK/virements";
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Création d'une action asynchrone pour récupérer un virement par son ID
export const getVirement = createAsyncThunk(
  "virements/getVirement",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/virement/get/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Création d'une action asynchrone pour supprimer un virement
export const deleteVirement = createAsyncThunk(
  "virements/deleteVirement",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/virement/delete/${_id}`);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// Création du slice
const VirementSlice = createSlice({
  name: "virements",
  initialState: initialState,
  reducers: {}, // Les reducers peuvent être ajoutés ici si nécessaire
  extraReducers: (builder) => {
    builder
      // Gestion des actions pour la récupération de tous les virements
      .addCase(fetchVirement.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVirement.fulfilled, (state, { payload }) => {
        state.isSuccess = true;
        state.virement = payload || [];
        state.recordsTotal = payload?.recordsTotal || 0;
        state.loading = false;
      })
      .addCase(fetchVirement.rejected, (state, {}) => {
        state.isSuccess = false;
        state.loading = false;
      })
      // Gestion des actions pour l'ajout d'un virement
      .addCase(addVirement.pending, (state) => {
        state.loading = true;
      })
      .addCase(addVirement.fulfilled, (state, { payload }) => {
        state.isSuccess = true;
        state.virement.push(payload);
        state.loading = false;
      })
      .addCase(addVirement.rejected, (state, { payload }) => {
        state.errors = payload?.message;
        state.isSuccess = false;
        state.loading = false;
      })
      // Gestion des actions pour la mise à jour d'un virement
      .addCase(updateVirement.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVirement.fulfilled, (state, { payload }) => {
        state.isSuccess = true;
        state.selected = state.virement.map((item) =>
          item.DT_RowId === payload._id
            ? { ...payload, DT_RowId: payload._id }
            : item
        );
        state.loading = false;
      })
      .addCase(updateVirement.rejected, (state, { payload }) => {
        state.errors = payload?.message;
        state.isSuccess = false;
        state.loading = false;
      })
      // Gestion des actions pour la récupération d'un virement par son ID
      .addCase(getVirement.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVirement.fulfilled, (state, { payload }) => {
        state.isSuccess = true;
        state.selected = payload;
        state.loading = false;
      })
      .addCase(getVirement.rejected, (state, {}) => {
        state.isSuccess = false;
        state.loading = false;
      })
      // Gestion des actions pour la suppression d'un virement
      .addCase(deleteVirement.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteVirement.fulfilled, (state) => {
        state.isSuccess = true;
        state.loading = false;
      })
      .addCase(deleteVirement.rejected, (state) => {
        state.isSuccess = false;
        state.loading = false;
      });
  },
});

export default VirementSlice.reducer; // Exportation du reducer
