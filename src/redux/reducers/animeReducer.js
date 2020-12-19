import { FETCH_ANIME_LIST, LOAD_MORE } from "../actionCreators/types";

const initialState = {
    animeList: []
}

export const animeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ANIME_LIST:
            return { ...state, animeList: [...action.payload] }
        case LOAD_MORE:
            return { ...state, animeList: [...state.animeList, ...action.payload] }
        default:
            return state
    }
}