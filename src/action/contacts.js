/**
 * Created by bear on 2017/7/23.
 */
import {
    Alert
} from 'react-native'

import  * as types from '../constants/actionType';

import {postFetch, getFetch} from '../utils/fetch'
import {ctsApi} from '../utils/api'


const requestFetch = () => ({
    type: types.REQUEST_FETCH

});
const receiveFetch = (payload) => ({

    type: types.RECEIVE_FETCH,

    payload: payload

})

const fetchSuccess = (payload) => ({
    type: types.GET_CTS_SUCCESS,
    payload:payload
})
const fetchFail = () => ({
    type: types.GET_CTS_FAIL,
})


export const fetchCts = () => {
    "use strict";
    return dispatch => {
        dispatch(requestFetch())
        postFetch(ctsApi.cts, {})
            .then(res => res.json())
            .then(result => {
                // console.log(result)

                dispatch(receiveFetch(result))
                if (result.success) {
                    dispatch(fetchSuccess(result.data))

                } else {

                    dispatch(fetchFail())
                    const msg = result.message

                    Alert.alert(msg)
                }
            })
            .catch(err => {

                dispatch(fetchFail())
                Alert.alert("请求不成功！")
            })

    }
}






