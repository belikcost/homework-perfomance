import { call, put, takeEvery } from "redux-saga/effects";

import { API_URL, CHANGE_PAGE_REQUEST, CHANGE_PAGE_TITLE_REQUEST } from "../constants";
import { changePageTitleSuccess } from "../redux/actions";


export const changePageFetch = ({ id, ...data }) => {
    return fetch(`${API_URL}/pages/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ ...data })
    }).then(response => response.json());
}

function* changePage(action) {
    const result = yield call(changePageFetch, action.payload);

    if (action.type === CHANGE_PAGE_TITLE_REQUEST) {
        yield put(changePageTitleSuccess(result));
    }
}

export default function* changePageWatcher() {
    yield takeEvery(CHANGE_PAGE_REQUEST, changePage);
    yield takeEvery(CHANGE_PAGE_TITLE_REQUEST, changePage);
}