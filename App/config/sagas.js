import { takeEvery, call, put } from "redux-saga/effects";

import {
  LOAD_TODOS,
  TODOS_RESULT,
  TODOS_ERROR
} from "../actions/todos";

const getLatestTodos = () =>
  fetch(`http://192.168.1.46:8000/api/v1/todos`);

function* fetchLatestPosts(action) {
  try {
    const response = yield call(getLatestTodos);
    const result = yield response.json();

    if(result.error){
        yield put({type: TODOS_ERROR, error: result.error})
    } else {
        yield put({type: TODOS_RESULT, result})
    }
  } catch (e) {
    yield put({type: TODOS_ERROR, error: e.message})
  }
}

export default function* rootSaga() {
  yield takeEvery(LOAD_TODOS, fetchLatestPosts);
}
