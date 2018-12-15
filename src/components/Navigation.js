import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/navigation.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'w3-css/w3.css';
import {connect} from "react-redux";
import {fetchAllForums, fetchForumById} from "../action-creators/forumActionCreator";
import {NavLink} from 'react-router-dom'


class Navigation extends Component {

    componentDidMount() {
        this.props.fetchAllForums();
        document.addEventListener("keydown", this.keyPressListener, false);
    }

    //prevent those mEmoRy LeAkS
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPressListener, false);
    }

    keyPressListener(event) {
        if (event.keyCode === 27) {

        }
    }


    constructor() {
        super();
        this.state = {
            searchMode: false,
            toggle: false,
            forumNames: '',
            id: '',
        };

    }

    onChange(event) {
        let input = event.target.value;
        if (input.length >= 1) {
            this.setState({searchMode: true});
            this.props.fetchForumById(input);
        }
        else {
            this.setState({searchMode: false});
        }

    }

    render() {
        let forumNames = this.props.forums.map(forum => (
            <div key={forum.id}>
                <NavLink to="/home" className="sidebar-item">{forum.title}</NavLink>
            </div>
        ));


        let toggled = this.state.toggle ? 'block' : 'none';
        let reversed = !this.state.toggle ? 'block' : 'none';


        return (
            <div>

                <div className="closed-sidebar">
                    <div className="sider" style={{display: reversed}}>
                        <i onClick={() => this.setState({toggle: !this.state.toggle, forumNames})}
                           className="sbtn sopen fas fa-arrow-right"/>
                    </div>
                </div>

                <div className="opened-sidebar" style={{display: toggled}}>

                    <div className="sidebar-opaciter" onClick={() => {
                        this.setState({toggle: false})
                    }}/>

                    <div id="sidebar">

                        <div className="sidebar-header">
                            <i onClick={() => this.setState({toggle: !this.state.toggle})}
                               className="sbtn sclose fas fa-arrow-left"/>
                            <h1>Gyarab Forum</h1>
                        </div>

                        <div className={"search-wrapper"}>
                            <input placeholder="Search..." id="sidebar-search-text"
                                   onChange={this.onChange.bind(this)}/>
                            <i onClick={() => this.handleClick()} className="sbtn fas fa-search"/>
                        </div>

                        <div className="forums">

                            {this.state.searchMode ? <NavLink to="/home"
                                                              className="sidebar-item">{this.props.singleItem.title}</NavLink> : this.state.forumNames}
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

Navigation.propTypes = {
    fetchAllForums: PropTypes.func.isRequired,
    fetchForumById: PropTypes.func.isRequired,
    forums: PropTypes.array.isRequired,
    singleItem: PropTypes.object
};

const mapStateToProps = state => ({
    forums: state.forums.storage,
    singleItem: state.forums.singleItem
});
const mapDispatchToProps = (dispatch) => ({
    fetchForumById: (id) => {
        dispatch(fetchForumById(id))
    },
    fetchAllForums: () => {
        dispatch(fetchAllForums())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

