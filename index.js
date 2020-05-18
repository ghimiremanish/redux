const redux = require('redux')
const createStore = redux.createStore


//action
const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action',
    }
}


//reducer
//(previousState, action) => newState

const initialState = {
    numberOfCakes: 10,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }

        default: return state

    }
}

//store
store = createStore(reducer)
console.log('initital state ',store.getState())

const unsubscribe = store.subscribe(() => console.log("updated state",store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//unsubscribing
unsubscribe()

