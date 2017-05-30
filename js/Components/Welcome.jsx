import React from "react";
import DrawerSimpleExample from './Libraries/appbar.jsx'
import BottomNavigationExampleSimple from './Libraries/bottom.jsx'

class App extends React.Component {
    render() {
        return <div>

            <DrawerSimpleExample />
            <nav className="navbar-fixed-bottom">
                <BottomNavigationExampleSimple />
            </nav>

        </div>
  }
}
export default App;
