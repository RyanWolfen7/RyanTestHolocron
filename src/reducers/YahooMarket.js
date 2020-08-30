import { fromJS } from 'immutable'
import { GET_SUMMARY, GET_SUMMARY_FAILURE, GET_SUMMARY_SUCCESS } from '../types/index'

const buildInitialState = () => {
    return fromJS({
        isLoading: false,
        isComplete: false,
        data: null,
        error: null
    })
}

const reducer = (state = buildInitialState(), action) => {
    switch (action.type) {
        case GET_SUMMARY:
            return state
                .set('isLoading', true)
                .set('isComplete', false)
        case GET_SUMMARY_SUCCESS: 
            return state    
                .set('data', action.data)
                .set('isLoading', false)
                .set('isComplete', true)
        case GET_SUMMARY_FAILURE:
            return state 
                .set('error', action.error)
                .set('isLoading', false)
                .set('isComplete', true)
        default:
            return state
    }
}

export default reducer