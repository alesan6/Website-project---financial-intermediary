import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/Welcome.jsx";
import injectTapEventPlugin from "react-tap-event-plugin";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <App />
        </MuiThemeProvider>,
        document.getElementById('app')
    );
});
