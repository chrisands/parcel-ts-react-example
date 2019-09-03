import { Store } from 'redux'

export interface ExtWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

export interface ConfigureStore {
  store: Store,
}
