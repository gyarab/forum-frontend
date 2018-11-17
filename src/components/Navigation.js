import React, {Component} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import '../styles/navigation.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

class Navigation extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className={"nav-container"}>
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
