import React, {Component} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import '../styles/navigation.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'w3-css/w3.css';

class Navigation extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (

            <div className={"w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left"} style={{width:450+'px'}}>
                <div className={"nav-search-box"}>
                    <input className={"nav-search-text"}/>
                <span className={"nav-search-icon"}>
                    <i className="fas fa-search"></i>
                </span>
                </div>
            </div>
        );
    }
}

export default Navigation;
