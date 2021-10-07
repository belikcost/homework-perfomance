import {
    CHANGE_PAGE_TITLE_SUCCESS,
    CREATE_PAGE_SUCCESS,
    DELETE_PAGE_REQUEST,
    FOCUS_BLOCK,
    GET_PAGES_SUCCESS
} from "../constants";


const initialState = {
    focusBlockId: null
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FOCUS_BLOCK:
            return { ...state, focusBlockId: action.payload };
        case DELETE_PAGE_REQUEST:
            return { ...state, pages: state.pages.filter(page => page.id !== action.payload) };
        case CREATE_PAGE_SUCCESS:
            return { ...state, pages: [...state.pages, action.payload] };
        case GET_PAGES_SUCCESS:
            return { ...state, pages: action.payload };
        case CHANGE_PAGE_TITLE_SUCCESS:
            return { ...state, pages: state.pages.map(page => page.id === action.payload.id ? action.payload : page) };
        default:
            return state;
    }
}