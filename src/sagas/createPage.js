import { call, put, takeEvery } from "redux-saga/effects";

import { API_URL, CREATE_PAGE_REQUEST } from "../constants";
import { createPageSuccess } from "../redux/actions";


const createPageFetch = (data) => {
    return fetch(`${API_URL}/pages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

function* createPage(action) {
    const result = yield call(createPageFetch, action.payload);
    yield put(createPageSuccess(result.page));
}

export default function* createPageWatcher() {
    yield takeEvery(CREATE_PAGE_REQUEST, createPage);
}