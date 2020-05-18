const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    error: '',
}

//actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//action creators
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
                users: action.payload,
                loading: false
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
    }
}

//calling a api (action creator)
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users = res.data.map(user =>user.name)
            dispatch(fetchUserSuccess(users))
        }).catch(err => {
            // err.message
            const error = err.message
            dispatch(fetchUserFailure(error))
        })
    }
}

//creating store with middleware thunk
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

//subscribe to the store
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchUsers())
