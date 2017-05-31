import React from "react";
import DrawerSimpleExample from './Libraries/appbar.jsx'
import BottomNavigationExampleSimple from './Libraries/bottom.jsx'


class Main extends React.Component {
    render() {
        return <div>

            <DrawerSimpleExample />
            {/*<div className="mainBack">*/}
                <div className="container">
                    {this.props.children}
                </div>
            {/*</div>*/}
            {/*<div className="background-inside">
                <img src="././images/back1.jpg" className="img-responsive" alt="moneyback" />
            </div>*/}

            <nav className="navbar-fixed-bottom">
                <BottomNavigationExampleSimple />
            </nav>

        </div>
  }
}
export default Main;
