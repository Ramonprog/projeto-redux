import { all, takeEvery, call, put } from "redux-saga/effects";
import { fetchUsersSuccess, fetchUsersFailure } from "./slice";

import axios from "axios";
//api Users: https://jsonplaceholder.typicode.com/users

function* fetchUser() {
  try {
    const { data } = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );

    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export default all([
  takeEvery("user/fetchUsers", fetchUser), //nome do slice + reducer
]);
