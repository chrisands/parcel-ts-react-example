import * as React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { History } from 'history'
import Routes from './Routes'

interface Root {
  store: Store;
  history: History;
}

const Root: React.FC<Root> = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
)

export default Root
