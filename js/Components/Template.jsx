import React from 'react'
import Navbar from './Libraries/semantic/Navbar.jsx'
import Footer from './Libraries/semantic/Footer.jsx'


class Template extends React.Component {

    render() {
        return <div>
            <nav className='ui grid'>
                <Navbar className='ui bound top sticky' />
            </nav>
            <div className="container">
                
            </div>
            <footer className='ui grid'>
                <Footer className='ui bound bottom sticky' />
            </footer>
        </div>
    }


}

export default Template
