import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null,
        },
      };
    },
    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      };
    },
    addressUser: (state, action) => {
      if (action.payload.location === "" || action.payload.number === "") {
        return alert("preencha todos os campos");
      }

      if (state.user === null) {
        return alert("você precisa estar logado para adicionar um endereço");
      }

      return {
        ...state,
        user: {
          ...state.user,
          address: action.payload,
        },
      };
    },
    deletAddress: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: null,
        },
      };
    },
    fetchUsers: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchUsersSuccess: (state, action) => {
      return {
        state,
        users: action.payload,
        loading: false,
      };
    },
    fetchUsersFailure: (state, action) => {
      console.log(action.payload, "deu ruim");
    },
  },
});

export const {
  createUser,
  logoutUser,
  addressUser,
  deletAddress,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
} = userSlice.actions;

export default userSlice.reducer;
