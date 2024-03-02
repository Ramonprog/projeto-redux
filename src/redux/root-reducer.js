// chamar todos os reducers da aplicação
import { combineReducers } from "redux";
import { userSlice } from "./user/slice";

//a propriedade user do combine, é justamente o nome que demos a ele no arquivo slice.js

export default combineReducers({
  user: userSlice,
});
