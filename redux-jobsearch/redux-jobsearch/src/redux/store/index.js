import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import mainReducer from '../reducer'
import favouritesReducer from '../reducer/favourites'
import selectedJobReducer from '../reducer/selectedJob'
import thunk from 'redux-thunk'                                         // redux-thunk is going to be helpful for handling async operations in the redux flow


// we'll have two situations: the end user may have the redux devTools or not
// if the devTools are installed in the user's browser, we'll have to use the compose function
// coming from them; if the devTools are not installed, we're going to use the compose function
// out of the redux library

const aComposeFunctionThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {

    favourites: [],
    selectedJob: {},
    jobList: {
        jobList: []
    }

}

const reducerGrande = combineReducers({                     // combine reducers here
    favourites: favouritesReducer,
    selectedJob: selectedJobReducer,
    jobList: mainReducer
   
})


const configureStore = createStore(                         // need to import this in index.js    <Provider store={configureStore}>   
    reducerGrande,
    initialState,
    aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk)) // composing two middlewares (DEV & thug) thug needs to be wrapped in applyMiddleware()
)

export default configureStore