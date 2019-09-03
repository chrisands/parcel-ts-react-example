import * as React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'
import { configureStore } from './store'
import Root from './components/Root'
import 'normalize.css'

const history = createBrowserHistory()

const { store } = configureStore({}, history)

render(
  <Root
    store={store}
    history={history}
  />,
  document.getElementById('root'),
)
