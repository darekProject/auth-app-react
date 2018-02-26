import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    renderLinks = () => {
        return [
            <li className="nav-item" key={1}>
                <Link className="nav-link" to="/signin">Sign In</Link>
            </li>,
            <li className="nav-item" key={2}>
                <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
        ];
    };


    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="">Disabled</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;