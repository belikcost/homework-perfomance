import {
    CHANGE_PAGE_REQUEST,
    CHANGE_PAGE_TITLE_REQUEST,
    CHANGE_PAGE_TITLE_SUCCESS,
    CREATE_PAGE_REQUEST,
    CREATE_PAGE_SUCCESS,
    DELETE_PAGE_REQUEST,
    FOCUS_BLOCK,
    GET_PAGES_REQUEST,
    GET_PAGES_SUCCESS,
} from "../constants";


export const changePageRequest = (data) => ({ type: CHANGE_PAGE_REQUEST, payload: data });

export const deletePageRequest = (data) => ({ type: DELETE_PAGE_REQUEST, payload: data });

export const createPageRequest = (data) => ({ type: CREATE_PAGE_REQUEST, payload: data });
export const createPageSuccess = (data) => ({ type: CREATE_PAGE_SUCCESS, payload: data });

export const getPagesRequest = () => ({ type: GET_PAGES_REQUEST });
export const getPagesSuccess = (data) => ({ type: GET_PAGES_SUCCESS, payload: data });

export const changePageTitleRequest = (data) => ({ type: CHANGE_PAGE_TITLE_REQUEST, payload: data });
export const changePageTitleSuccess = (data) => ({ type: CHANGE_PAGE_TITLE_SUCCESS, payload: data });

export const focusBlock = (data) => ({ type: FOCUS_BLOCK, payload: data });