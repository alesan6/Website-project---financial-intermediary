import React from 'react'
import ReactDOM from 'react-dom'
import Template from './Components/Template.jsx'
import Main from './Components/Main.jsx'



import {Route, Router, IndexRoute, hashHistory} from 'react-router'

require('../scss/main.scss')

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Template}>
                <IndexRoute component={Main} />
                {/*<Route path='/about' component={About} />
                <Route path='/products' component={Products} />
                <Route path='/cart/:id' component={Cart} />
                <Route path='/contact' component={Contact} />*/}
                {/*<Route path='*' component={NotFound} />*/}
            </Route>

        </Router>,
        document.getElementById('app')
    );
});
