import {GET_PHOTOS} from '../types'
import axios from 'axios'

export const getPhotos = () => async dispatch => {
    
    
        const res = await axios.get(`http://jsonplaceholder.typicode.com/photos`)
        dispatch( {
            type: GET_PHOTOS,
            payload: res.data
        })

}