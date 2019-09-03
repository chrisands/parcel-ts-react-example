import * as React from 'react'
import { Route, Switch } from 'react-router'
import App from './App'
import Dashboard from './Dashboard'

const Routes: React.FC = () => (
  <App>
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  </App>
)

export default Routes
