import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Name from './name'
import Ready from './views/ready'
import Drawing from './views/drawing'
import Result from './views/result'
import Vote from './views/vote'


render((
  <Router history={hashHistory}>
    <Route path="/" component={Name}/>
    <Route path="/ready" component={Ready}/>
    <Route path="/drawing" component={Drawing}/>
    <Route path="/vote" component={Vote}/>
    <Route path="/result" component={Result}/>
  </Router>
), document.getElementById('app'))