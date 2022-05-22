import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Home from './components/Home'
import Stats from './components/Stats'
import Account from './components/Account'
import AddCost from './components/AddCost'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './index.css'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/addcost/:type" component={AddCost} />
      <Route path="/stats" component={Stats} />
      <Route path="/account" component={Account} />
    </Route>
  </Router>,
  document.getElementById('root')
)
