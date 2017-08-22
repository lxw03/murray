/**
 * Created by bear on 2017/7/23.
 */
import {
    Alert
} from 'react-native'

import  * as types from '../constants/actionType';

import {postFetch, getFetch} from '../utils/fetch'
import {userApi} from '../utils/api'


const requestFetch = () => ({
    type: types.REQUEST_FETCH

});
const receiveFetch = (payload) => ({

    type: types.RECEIVE_FETCH,

    payload: payload

})
const requestFetchReg = () => ({
    type: types.REQUEST_FETCH_RGG

});
const receiveFetchReg = (payload) => ({

    type: types.RECEIVE_FETCH_REG,

    payload: payload

})


const fetchSuccess = () => ({
    type: types.FETCH_SUCCESS,
})
const fetchFail = () => ({
    type: types.FETCH_FAIL,
})

const fetchSuccessReg = (payload) => ({
    type: types.FETCH_SUCCESS_RGG,
    payload:payload
})
const fetchFailReg = () => ({
    type: types.FETCH_FAIL_REG,
})




export const nameChange = (payload) => ({

    type: types.NAME_CHANGE,
    payload: payload

})
export const pwdChange = (payload) => ({
    type: types.PWD_CHANGE,
    payload: payload

})

export const loginOut = (payload) => ({
    type: types.USER_LOGIN_OUT,
    payload: payload

})


export const fetchSignIn = (data) => {
    console.log(data)
    "use strict";
    return dispatch => {
        dispatch(requestFetch())
        setTimeout(() => {
                postFetch(userApi.signIn, data)
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)

                        dispatch(receiveFetch(result))
                        if (result.success) {

                            dispatch(fetchSuccess())

                        } else {

                            dispatch(fetchFail())
                            const msg = result.message

                            Alert.alert(msg)
                        }
                    })
                    .catch(err => {

                        dispatch(fetchFail())

                        Alert.alert("请求不成功！")
                        console.log(err)
                    })

            }
            , 2000);
    }
}
export const fetchSignUp = (data) => {
    "use strict";
    return dispatch => {
        dispatch(requestFetchReg())
        postFetch(userApi.signUp, data)
            .then(res => res.json())
            .then(result => {
                dispatch(receiveFetchReg(result))
                if(result.success){
                    dispatch(fetchSuccessReg(data))
                }
                else {
                    dispatch(fetchFailReg())
                }

                // console.log(result)
            })
            .catch(err => {
                dispatch(fetchFailReg())
                Alert.alert("请求不成功！")
                console.log(err)
            })
    }
}





