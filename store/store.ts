import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import combined from './reducers'
import log from './middlewares/log'
import throttle from './middlewares/throttle'
import { loadState } from '../services/localstorage'

const middlewares = [throttle, log, thunkMiddleware]

const persistedState = loadState()

const store = createStore(combined, persistedState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
