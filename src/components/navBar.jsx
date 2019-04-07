import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar 
                <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span> 
                <button onClick={this.props.onStart} id="game" className="btn btn-danger btn-sm m-2">Start</button>

              </a>
            </nav>
        );
    }
}

export default NavBar;