import { takeEvery, call, put } from 'redux-saga/effects';

import { API_URL, GET_PAGES_REQUEST } from "../constants";
import { getPagesSuccess } from "../redux/actions";


const getPagesFetch = () => {
    return fetch(`${API_URL}/pages`).then(response => response.json());
}

function* getPages() {
    const result = yield call(getPagesFetch);
    yield put(getPagesSuccess(result));
}

export default function* getPagesWatcher() {
    yield takeEvery(GET_PAGES_REQUEST, getPages);
}