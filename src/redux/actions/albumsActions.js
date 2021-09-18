import {GET_ALBUMS} from '../types'
import axios from 'axios'

export const getAlbums = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
        dispatch( {
            type: GET_ALBUMS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            payload: console.log(e),
        })
    }

}