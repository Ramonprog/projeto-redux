import { all } from "redux-saga/effects";
import user from "./user/saga";

//function* é uma function geradoura, semelhante ao async await, um iterador
//function* tipo async / yield tipo await

export default function* rootSaga() {
  return yield all([user]);
}
