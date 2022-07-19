import axios from 'axios'
import jsonpAdapter from "axios-jsonp"
import {
    SET_AIRLINES,
} from '../types';;

export const setAirlineData = () => async dispatch => {
    axios({
        url: "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
        adapter: jsonpAdapter,
        callbackParamName: "jsonp" //callback by default
    }).then(res => {
        dispatch({
            type: SET_AIRLINES,
            payload: (res.data)
        });
    }).catch(err => {
        console.log(err)
    })
};
