import { call, takeEvery } from "redux-saga/effects";

import { API_URL, DELETE_PAGE_REQUEST } from "../constants";


const deletePageFetch = (pageId) => {
    return fetch(`${API_URL}/pages/${pageId}`, {
        method: 'DELETE',
    });
}

function* deletePage(action) {
    yield call(deletePageFetch, action.payload);
}

export default function* deletePageWatcher() {
    yield takeEvery(DELETE_PAGE_REQUEST, deletePage);
}