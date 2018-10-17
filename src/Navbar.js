import React, {Component} from 'react';
import './Navbar.css';
import if_pizza_1760345 from './if_pizza_1760345.svg';
class Navbar extends React.Component {
    render() {
        return (
            <div class='container'>
            <div class='header clearfix'>
            <nav>
            <img className="Avatar"
            src={if_pizza_1760345} width="100" height="50" />
                <ul class='nav nav-pills'>
                <h3 class='text-muted'>Navbar</h3>
                    <li role='presentation' class='active'><a href="#">Home</a></li>
                    <li role="presentation"><a href="#">About</a></li>
                    <li role="presentation"><a href="#">Contact</a></li>
                </ul>
            </nav>
            </div>
            </div>
        )
    }
}

export default Navbar;