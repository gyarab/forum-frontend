import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/navigation.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {connect} from "react-redux";
import {fetchAllForumNames, searchForumByName} from "../action-creators/forumActionCreator";
import {NavLink} from 'react-router-dom'
import AccountInfo from "./AccountInfo";
import {resetPosts} from "../action-creators/postActionCreator";
import {createForum} from "../action-creators/forumActionCreator";


class Navigation extends Component {

    componentDidMount() {
        this.props.fetchForumNames();
    }

    constructor() {
        super();
        this.state = {
            searchMode: false,
            toggle: false,
            allKeys: [],
            searchedKeys: [],
            id: '',
            newForumName: "",
        };

    }

    onChange(event) {
        let input = event.target.value;
        if (input.length >= 1) {
            this.props.searchForumByName(input);
            this.setState({searchMode: true, searchedKeys: []}, () => {
                this.handleClick.bind(this);
            });
        }
        else {
            this.setState({searchMode: false, searchedKeys: []});
        }
    }

    handleClick() {
        this.setState({searchedKeys: Object.keys(this.props.arrayOfForums)});
    }

    reset(key) {
        if (this.props.forums[key] !== parseInt(this.props.location.pathname.split("/").pop())) {
            this.props.postsReset();
        }
    }

    handleInput(event){
        this.setState({newForumName:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        if (/\S/.test(this.state.newForumName)) {
            let forum = {
                name:this.state.newForumName,
            };
            this.setState({newForumName: "", toggle: !this.state.toggle});
            this.props.createForum(forum);
        }
    }

    render() {
        let forumNames = this.state.allKeys.map(key => (
            <div key={this.props.forums[key]}>
                <NavLink onClick={() => {
                    this.setState({toggle: false});
                    this.reset(key);

                }}
                         to={"/forums/" + this.props.forums[key]} className="sidebar-item">{key}</NavLink>
            </div>
        ));
        let searchedForums = this.state.searchedKeys.map(key => (
            <div key={this.props.arrayOfForums[key]}>
                <NavLink to={"/forums/" + this.props.arrayOfForums[key]} className="sidebar-item">{key}</NavLink>
            </div>
        ));

        let toggled = this.state.toggle ? 'block' : 'none';
        let reversed = !this.state.toggle ? 'block' : 'none';

        return (
            <div>

                {/*Closed state*/}

                <div className="closed-sidebar">
                    <div className="sider" style={{display: reversed}}>
                        <i onClick={() => this.setState({
                            toggle: !this.state.toggle,
                            allKeys: Object.keys(this.props.forums)
                        })}
                           className="sbtn sopen fas fa-arrow-right"/>
                    </div>
                </div>

                {/*Opened state*/}

                <div className="opened-sidebar" style={{display: toggled}}>

                    {/*Blur screen*/}

                    <div className="sidebar-opaciter" onClick={() => {
                        this.setState({toggle: false});
                    }}/>

                    {/*Sidebar*/}

                    <div id="sidebar">

                        {/*Header*/}

                        <div className="sidebar-header">

                            {/*Close button*/}

                            <i onClick={() => this.setState({toggle: !this.state.toggle})}
                               className="sbtn sclose fas fa-arrow-left"/>

                            {/*Title*/}

                            <NavLink style={{textDecoration: "none", color: "white", fontSize: '30pt', marginTop: 0}}
                                     onClick={() => {
                                         this.props.postsReset();
                                         this.setState({toggle: false});
                                     }} to="/">Gyarab Forum
                            </NavLink>

                            {/*Register*/}

                            <NavLink style={{display: localStorage.getItem("logged") ? "none" : "block"}}
                                     onClick={() => {
                                         this.props.postsReset();
                                         this.setState({toggle: false});
                                     }} to="/login" className="sidebar-item auth"><i className="far fa-user"/> Log in /
                                Register
                            </NavLink>

                            {/*Logout*/}

                            <NavLink style={{display: localStorage.getItem("logged") ? "block" : "none"}}
                                     onClick={() => {
                                         // this.props.authReset();
                                         localStorage.clear();
                                         this.setState({toggle: false});
                                     }} to="/login" className="sidebar-item auth"><i
                                className="far fa-user"/> Logout
                            </NavLink>

                        </div>

                        {/*Search*/}

                        <div className={"search-wrapper"}>
                            <input placeholder="Search..." id="sidebar-search-text"
                                   onChange={this.onChange.bind(this)}/>
                            <i onClick={this.handleClick.bind(this)} className="sbtn fas fa-search"/>
                        </div>

                        {/*List*/}

                        <div className="forums">

                            {this.state.searchMode ? searchedForums : forumNames}
                            <div className style={{display: localStorage.getItem("logged") ? "block" : "none"}}>
                                <form><input type="text" placeholder="+ Create a forum"
                                             className="create-input" onChange={this.handleInput.bind(this)}
                                             value={this.state.newForumName}/>
                                    <button className="create-submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
                                </form>
                            </div>

                        </div>

                        {localStorage.getItem("logged") ?  <AccountInfo history={this.props.history}/> : ""}

                    </div>

                </div>

            </div>
        );
    }
}

Navigation.propTypes = {
    fetchForumNames: PropTypes.func.isRequired,
    searchForumByName: PropTypes.func.isRequired,
    postsReset: PropTypes.func.isRequired,
    createForum: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    posts: state.forums.posts,
    forums: state.forums.storage,
    arrayOfForums: state.forums.arrayOfForums
});

const mapDispatchToProps = (dispatch) => ({
    searchForumByName: (name) => {
        dispatch(searchForumByName(name))
    },
    fetchForumNames: () => {
        dispatch(fetchAllForumNames())
    },
    postsReset: () => {
        dispatch(resetPosts())
    },
    createForum: (forum) => {
        dispatch(createForum(forum))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

