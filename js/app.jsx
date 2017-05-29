import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main.jsx'

require('../scss/main.scss')


class App extends React.Component {
    render() {
        return <div>
            <Main />
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        < App />,
        document.getElementById('app')
    );
});
