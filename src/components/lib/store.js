import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { getMovies, getMovieDetail } from './api'
import {put, takeEvery, call} from "redux-saga/effects"

function* getMoviesSaga(action){
    if(action.payload.length > 2){
        try{
            console.log("Action payload is", action.payload)
            const movies = yield call(getMovies, action.payload)

            yield put({type: 'FETCH_SUC', payload: movies})
        } catch (e) {
            console.log("e is", e)
            yield put({type: 'FETCH_FAIL', payload: [{Title: 'Not found', imdbID:'none'}]})
        }
    }
}

function* getMovieDetailSaga(action){
    try{
        console.log("Action payload is", action.payload)
        const movies = yield call(getMovieDetail, action.payload)
        yield put({type: 'DETAIL_SUC', payload: movies})
    } catch (e){
        yield put({type: 'DETAIL_FAIL', payload: {Title: 'Not found', imdbID:'none'}})
        console.log("e is", e)
    }
}

function* rootSaga(){
    yield takeEvery("DETAIL_REQ", getMovieDetailSaga)
    yield takeEvery("FETCH_REQ", getMoviesSaga)
}

const moviesReducer = (state = [], action) => {
    switch (action.type){
        case 'FETCH_SUC':
            return action.payload
        case 'FETCH_FAIL':
            return action.payload
        case 'CLEAR':
            return []
        default:
            return state
    }
}

const detailReducer = (state = {}, action) => {
    switch (action.type){
        case 'DETAIL_SUC':
            return action.payload
        case 'DETAIL_FAIL':
            return action.payload
        case 'CLEAR':
            return []
        default:
            return state
    }
}

const initialFavs = JSON.parse(localStorage.getItem('favs')) || []

console.log("initial favs are", initialFavs)
const favReducer = (state = initialFavs, action) => {
    switch (action.type){
        case 'ADD_FAV':
            console.log("state is", state)
            const newState = [...state, action.payload]
            console.log("newState is", newState)
            console.log("action.payload", action.payload)
            localStorage.setItem('favs', JSON.stringify(newState))
            return newState
        case 'REMOVE_FAV':
            const newState2 = state.filter(favObj => {
                return favObj.imdbID !== action.payload.imdbID
            })
            localStorage.setItem('favs', JSON.stringify(newState2))
            return newState2
        default:
            return state
    }
}


const rootReducer = combineReducers({
    detailReducer,
    moviesReducer,
    favReducer
})


const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(
    rootReducer, 
    applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(rootSaga)