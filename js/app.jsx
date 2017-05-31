import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/Welcome.jsx"
import Main from "./Components/Main.jsx"
import Contact from "./Components/Contact.jsx"
import About from "./Components/About.jsx"
import injectTapEventPlugin from "react-tap-event-plugin";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Route, Router, IndexRoute, hashHistory} from 'react-router'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


require('../scss/main.scss')

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={hashHistory}>
                <Route path='/' component={App} />
                <Route path='/main' component={Main}>
                    <Route path='/main/about' component={About} />
                    <Route path='/main/contact' component={Contact} />
                    {/*<Route path='*' component={NotFound} />*/}
                </Route>
        </Router>
        </MuiThemeProvider>,
        document.getElementById('app')
    );
});
