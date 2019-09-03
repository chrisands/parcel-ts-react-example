import { applyMiddleware, compose, createStore } from 'redux'
import { History } from 'history'
import { ExtWindow, ConfigureStore } from './configureStore.d'
import rootReducer from '../reducers'
import api from './middlewares/api'

const configureStore = (initialState: object, history: History): ConfigureStore => {
  const composeEnhancer = (window as unknown as ExtWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const enhancer = composeEnhancer(applyMiddleware(
    api(history),
  ))

  const store = createStore(rootReducer, initialState, enhancer)

  return {
    store,
  }
}

export default configureStore
