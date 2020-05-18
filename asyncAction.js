const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    loading: false,
    users: [],
    error: '',
}

//actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

const fetchUserSuccess = users => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//reducer
const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                users: action.payload
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                error: action.payload
            }
    }
}

//store
const store = createStore(reducer)