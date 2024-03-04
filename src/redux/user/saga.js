import { all, takeEvery } from "redux-saga/effects";

function* fetchUser() {
  console.log("chamou dentro do saga");
}

export default all([
  takeEvery("user/fetchUsers", fetchUser), //nome do slice + reducer
]);
