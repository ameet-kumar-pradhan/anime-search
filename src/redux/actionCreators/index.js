import Axios from "axios"
import { FETCH_ANIME_LIST, LOAD_MORE } from "./types"

export const getAnimeList = (keyword, page = 1, limit = 16) => {
    return async dispatch => {
        await Axios.get(`https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=${limit}&page=${page}`).then(res => {
            setTimeout(() => {
                dispatch({ type: FETCH_ANIME_LIST, payload: res.data.results })
            }, 2000);

        }
        )
    }
}

export const getMoreList = (keyword, page, limit = 16) => {
    return async dispatch => {
        await Axios.get(`https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=${limit}&page=${page}`).then(res => {
            dispatch({ type: LOAD_MORE, payload: res.data.results })
        })
    }
}

