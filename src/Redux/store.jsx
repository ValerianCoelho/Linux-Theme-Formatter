import { createStore } from 'redux'
import themeReducer from './Theme/themeReducers'

const store = createStore(themeReducer)

export default store