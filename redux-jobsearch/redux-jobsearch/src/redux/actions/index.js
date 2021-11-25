export const SAVE_TO_JOBLIST ='SAVE_TO_JOBLIST'
export const SET_SELECTED_JOB ='SET_SELECTED_JOB'
export const GET_JOBS ='GET_JOBS'
export const ADD_TO_FAVOIRITES ='TOGGLE_FAVOIRITE'
export const REMOVE_FROM_FAVOURITES ='REMOVE_FROM_FAVOURITES'

// export const saveFetchedJobsAction = (fetchedData) => ({
//     type: SAVE_TO_JOBLIST,
//     payload: fetchedData
// })

export const setSelectedJobAction = (e) => ({
    type: SET_SELECTED_JOB,
    payload: e
})

// EXPLANATION:
// if you have redux-thunk injected in the flow, you can do more with your action creators.
// with redux thunk you can return out of them not just simple actions, but FUNCTIONS.
// and these functions can be even ASYNC, so you can do even FETCHES inside of them!
// if you're trying to dispatch something that is NOT an action WITHOUT thunk
// everything will crash!
// BUT if you have redux-thunk in the flow, the function you'll eventually dispatch
// is going to be given by redux-thunk a DISPATCH function as the first argument

export const getJobsAction = (baseEndpoint, query) => {
    return async (dispatch) => {
    try {
        const response = await fetch(baseEndpoint + query + "&limit=15")

        if (response.ok) {
            const  {data}  = await response.json();
            console.log(data)          
             // now it's time do to the dispatch

             dispatch({
                type: SAVE_TO_JOBLIST,
                payload: data})
                
        } else {
        alert("Error fetching results");
        return;
        }
    } catch (error) {
        alert("Error fetching results", error);
    }}
}


export const addToFavouritesAction = (data) => ({
    type: ADD_TO_FAVOIRITES,
    payload: data
})

export const removeFromFavouritesAction = (data) => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: data
})