const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



//action
const BUY_CAKE      = 'BUY_CAKE'
const BUY_ICECREAM  = 'BUY_ICECREAM'


//reducer for single state
//(previousState, action) => newState

//states init
// const initialState = {
//     numberOfCakes: 10,
//     numberOfIcecream: 20,
// }


// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numberOfCakes: state.numberOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numberOfIcecream: state.numberOfIcecream - 1 
//         }

//         default: return state

//     }
// }

// //store
// store = createStore(reducer)
// console.log('initital state ',store.getState())

// const unsubscribe = store.subscribe(() => console.log("updated state",store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIcecream())
// store.dispatch(buyIcecream())
// store.dispatch(buyIcecream())
// //unsubscribing
// unsubscribe()

// action creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action',
    }
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
    }
}

//reducer for multiple states
const initialCakeState = {
    numberOfCakes: 10
}

const initialIcecreamState = {
    numberOfIcecream: 20
}

 const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
    case BUY_CAKE: return{
        ...state,
        numberOfCakes: state.numberOfCakes - 1
    }

    default: return state
    }
 }

 const icecreamReducer = (state = initialIcecreamState, action)=>{
     switch(action.type){
         case BUY_ICECREAM: return{
             ...state,
            numberOfIcecream: state.numberOfIcecream - 1
         }

         default: return state
     }
 }

 const rootReducer = combineReducers({
     cake: cakeReducer,
     icecream: icecreamReducer 
 })

 //store
store = createStore(rootReducer,applyMiddleware(logger))
console.log('initital state ',store.getState())

const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
//unsubscribing
unsubscribe()
