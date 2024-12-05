import { combineReducers, compose, createStore } from 'redux'
import questionStoreReducer from "./questionStoreReducer"
import answeredQuestionsReducer from './answeredQuestionsReducer';
import trackqnswerReducer from './wrongandrightAnsweredReducer'




export const reducer = combineReducers({
  data: questionStoreReducer,
  questions: answeredQuestionsReducer,
  answeredquestions: trackqnswerReducer, 
  
})
export const store = createStore(
  reducer,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// console.log(store)

// store.dispatch(addCartItem(1))
// store.dispatch(addCartItem(12))

// store.dispatch(increaseCartItemQuantity(12))

// store.dispatch(decreaseCartItemQuantity(12))
// store.dispatch(decreaseCartItemQuantity(12))

// store.dispatch(addWishListItem(18))
// store.dispatch(addWishListItem(11))

// store.dispatch(removeWishListItem(11))
// store.dispatch(removeWishListItem(18))