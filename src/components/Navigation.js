import React, {Component} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import '../styles/navigation.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'w3-css/w3.css';
import {connect} from "react-redux";
import {fetchAllForums} from "../action-creators/forumActionCreator";
import {NavLink} from 'react-router-dom'


class Navigation extends Component {
    static defaultProps = {};

    static propTypes = {};

    constructor() {
        super();

        this.state = {
            toggle: false
        };

    }

    render() {
        let toggled = this.state.toggle ? 'block' : 'none';
        let reversed = !this.state.toggle ? 'block' : 'none';
        return (
            <div>
                <div className="closed-sidebar">
                <div className="sider" style={{display: reversed}}>
                    <i onClick={() => this.setState({toggle: !this.state.toggle})} className="sbtn sopen fas fa-arrow-right"/>
                </div>
                </div>

                <div className="opened-sidebar" style={{display: toggled}}>
                    <div className="sidebar-opaciter"/>
                    <div id="sidebar-wrapper">
                        <div id="sidebar">
                            <div className="sidebar-header">
                                <i onClick={() => this.setState({toggle: !this.state.toggle})}
                                   className="sbtn sclose fas fa-arrow-left"/>
                                <h1>Gyarab Forum</h1>
                            </div>
                            <div className={"search-wrapper"}>
                                <input placeholder="Search..." id="sidebar-search-text"/>
                                <i className="sbtn fas fa-search"/>
                            </div>
                            <NavLink to="/home" className="sidebar-item">Home</NavLink>
                            <NavLink to="/about" className="sidebar-item">About</NavLink>
                            <NavLink to="/about" className="sidebar-item">Hello</NavLink>
                            <NavLink to="/about" className="sidebar-item">World</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

Navigation.propTypes = {
    fetchAllForums: PropTypes.func.isRequired,
    forums: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    forums: state.forums.storage
});
const mapDispatchToProps = dispatch => ({
    fetchAllForums: () => dispatch(fetchAllForums())
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

