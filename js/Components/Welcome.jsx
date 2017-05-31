import React from "react";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from "react-router"

class App extends React.Component {
    render() {

        return <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <img alt="logo" className="img-responsive img-circle logo" src="././images/logo.jpg" />
                    </div>
                </div>
            </nav>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="text-center">Witaj w bezpiecznej strefie finansowej!</h1>
                    <p className="text-center">Nasi doradcy wezmą w swoje ręce Twoje finanse. W tym miejscu wszystko jest intuicyjne. Przekonaj się sam!<br/>
                    To miejsce jest stworzone właśnie dla Ciebie!</p>
                    <Link to="/main"><button type="button" className="btn btn-info btn-lg btn-block btnEnter">Wejdź!</button></Link>
                    <img src="./images/back2.jpg" className="img-responsive" alt="Welcome!" />
                </div>
            </div>
        </div>

  }
}
export default App;
