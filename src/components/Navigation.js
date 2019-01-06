import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/navigation.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {connect} from "react-redux";
import {fetchForumById, fetchForums} from "../action-creators/forumActionCreator";
import {NavLink} from 'react-router-dom'


class Navigation extends Component {

    componentDidMount() {
        this.props.fetchForums();
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
        let forumNames = this.props.posts.map(forum => (
            <div key={forum.id}>
                <NavLink to={"/"+forum.title} className="sidebar-item">{forum.title}</NavLink>
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
                        this.setState({toggle: false});console.log(this.props)
                    }}/>

                    <div id="sidebar">

                        <div className="sidebar-header">
                            <i onClick={() => this.setState({toggle: !this.state.toggle})}
                               className="sbtn sclose fas fa-arrow-left"/>
                            <h1>Gyarab Forum</h1>
                            <NavLink onClick={()=>{this.setState({toggle:false});}} to="/login" className="sidebar-item"><i className="far fa-user"/>  Log in / Register</NavLink>
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
    fetchForums: PropTypes.func.isRequired,
    fetchForumById: PropTypes.func.isRequired,
    forums: PropTypes.array.isRequired,
    singleItem: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.forums.posts,
    forums: state.forums.storage,
    singleItem: state.forums.singleItem
});
const mapDispatchToProps = (dispatch) => ({
    fetchForumById: (id) => {
        dispatch(fetchForumById(id))
    },
    fetchForums: () => {
        dispatch(fetchForums())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

