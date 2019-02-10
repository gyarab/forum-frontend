import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchPosts, fetchForumById} from "../action-creators/forumActionCreator";
import connect from "react-redux/es/connect/connect";
import '../styles/renderLilPosts.scss';
import LilPost from "./LilPost";

class RenderLilPosts extends Component {


    componentDidMount(){
        this.props.fetchPosts(1, this.state.page)
    }

    componentDidUpdate(prevProps){
        if (prevProps.posts !== this.props.posts && prevProps.posts.length === 0) {
            this.loadPosts()
        }

    }

    constructor() {
        super();
        this.state = {
            forumID: '1',//hot placeholder
            page: 0,
            maxPosts: false,
            position: window.location.href, //gets the url of the page, yet unused
            posts: []
        };
    }


    loadPosts() {
        let currentPosts = this.state.posts;
        let list = this.props.posts.content;
        console.log(this.props.posts);
        list.map(post => {
            currentPosts.push(post)
        });
        if(this.props.posts.last){
            this.setState({
                posts: currentPosts,
                page: this.state.page + 1,
                maxPosts: true
            })
        } else {
            this.setState({
                posts: currentPosts,
                page: this.state.page + 1
            });
            this.props.fetchPosts(1, this.state.page+1)
        }
    }


    render() {
        console.log(posts);
        let posts = this.state.posts.map(post => (
            <div key={post.id}>
                <LilPost title={post.title} likes={post.likes} dislikes={post.dislikes} content={post.content}/>
            </div>
        ));
        let tillMax = !this.state.maxPosts ? 'block' : 'none';

        return (
            <div className="rendered-lilposts">

                {posts}
                <div className={"load-more-wrapper"}>
                    <button className="load-more" onClick={this.loadPosts.bind(this)} style={{display: tillMax}}>Load more
                        posts
                    </button>
                </div>
            </div>
        );
    }
}

RenderLilPosts.propTypes = {
    fetchForumById: PropTypes.func.isRequired,
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
    fetchPosts: (forumId, forumPage) => {
        dispatch(fetchPosts(forumId, forumPage))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderLilPosts);