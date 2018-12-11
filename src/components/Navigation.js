import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/navigation.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'w3-css/w3.css';
import {connect} from "react-redux";
import {fetchAllForums} from "../action-creators/forumActionCreator";
import {NavLink} from 'react-router-dom'




class Navigation extends Component {
    static defaultProps = {};

    static propTypes = {};

    componentWillMount() {
        this.props.fetchAllForums();
    }

    constructor() {
        super();
        this.state = {
            toggle: false
        };

    }

    render() {
        const forumNames = this.props.forums.map(post => (
            <div key={post.id}>
                <NavLink to="/home" className="sidebar-item">{post.title}</NavLink>
            </div>
        ));
        let toggled = this.state.toggle ? 'block' : 'none';
        let reversed = !this.state.toggle ? 'block' : 'none';
        return (
            <div>
                <div className="closed-sidebar">
                    <div className="sider" style={{display: reversed}}>
                        <i onClick={() => this.setState({toggle: !this.state.toggle})}
                           className="sbtn sopen fas fa-arrow-right"/>
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
                            <div className="forums">
                                    {forumNames}
                            </div>
                            {/*<NavLink to="/home" className="sidebar-item">Home</NavLink>*/}
                            {/*<NavLink to="/about" className="sidebar-item">About</NavLink>*/}
                            {/*<NavLink to="/about" className="sidebar-item">Hello</NavLink>*/}
                            {/*<NavLink to="/about" className="sidebar-item">World</NavLink>*/}
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

export default connect(mapStateToProps, {fetchAllForums})(Navigation);

