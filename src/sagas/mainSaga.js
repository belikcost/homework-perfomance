import { all, call } from 'redux-saga/effects';

import changePageWatcher from "./changePage";
import deletePageWatcher from "./deletePage";
import createPageWatcher from "./createPage";
import getPagesWatcher from "./getPages";


export default function* mainSaga() {
    yield all([
        call(changePageWatcher),
        call(deletePageWatcher),
        call(createPageWatcher),
        call(getPagesWatcher),
    ]);
}