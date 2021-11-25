import { initialState } from '../store'
import { SET_SELECTED_JOB } from '../actions'

const selectedJobReducer = (state = initialState, action) => {
    
    switch (action.type) {
     
         
            case SET_SELECTED_JOB:
                return {
                    ...state,
                    selectedJob: action.payload
                }
            default: 
                return state
    }
}



export default selectedJobReducer