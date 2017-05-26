import React from 'react'
import ReactDOM from 'react-dom'

import {Route, Router, IndexRoute, hashHistory} from 'react-router'

// require('../scss/main.scss')

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Template}>
                <IndexRoute component={Main} />
                <Route path='/products' component={Products} />

                <Route path='/contact' component={Contact} />
                {/*<Route path='*' component={NotFound} />*/}
            </Route>

        </Router>,
        document.getElementById('app')
    );
});
