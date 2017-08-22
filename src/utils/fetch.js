/**
 * Created by bear on 2017/7/23.
 */

import fetch from 'isomorphic-fetch'

const base = 'http://localhost:3003/';


export  const postFetch = (url, payload) => {
        console.log(url,payload)
    return fetch(base + url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            // 'Accept': 'application/json,text/plain,*/*',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
};
export  const getFetch = (url) => {

    return fetch(base + url, {
        method: 'GET',
        credentials: 'include',
        headers: {
            // 'Accept': 'application/json,text/plain,*/*',
            "Content-Type": "application/json"
        },
    })
};

