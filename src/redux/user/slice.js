import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
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

      return {
        ...state,
        user: {
          ...state.user,
          address: action.payload,
        },
      };
    },
  },
});

export const { createUser, logoutUser, addressUser } = userSlice.actions;

export default userSlice.reducer;
