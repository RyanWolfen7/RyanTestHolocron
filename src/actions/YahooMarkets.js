import { GET_SUMMARY, GET_SUMMARY_SUCCESS, GET_SUMMARY_FAILURE } from '../types/index'

const getSummary = () => {
    return({
        types: [GET_SUMMARY, GET_SUMMARY_SUCCESS, GET_SUMMARY_FAILURE ],
        payload: {
            request: {
                url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary',
                method: 'GET',
                headers: {
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                    "x-rapidapi-key": "de72e2fea3msh9d701c5e21b389ap104edfjsn43be777e7f01"
                }
            }
        }
    })
}

export default {
    getSummary
}