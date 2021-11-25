export const SAVE_TO_JOBLIST ='SAVE_TO_JOBLIST'
export const SET_SELECTED_JOB ='SET_SELECTED_JOB'

export const saveFetchedJobsAction = (fetchedData) => ({
    type: SAVE_TO_JOBLIST,
    payload: fetchedData
})

export const setSelectedJobAction = (e) => ({
    type: SET_SELECTED_JOB,
    payload: e
})