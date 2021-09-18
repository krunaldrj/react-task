import { combineReducers } from 'redux'
import albumsReducer from './albumsReducers'
import photosReducer from './photosReducers'

export default combineReducers({
  albums: albumsReducer,
  photos:photosReducer
})