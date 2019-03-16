import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchPosts, searchForumByName} from "../action-creators/forumActionCreator";
import connect from "react-redux/es/connect/connect";
import '../styles/renderLilPosts.scss';
import LilPost from "./LilPost";

class RenderLilPosts extends Component {


    componentDidMount() {
        console.dir(this.props.match.params.forumId);
        this.props.fetchPosts(parseInt(this.props.match.params.forumId), 0);
    }


    constructor() {
        super();
        this.state = {
            forumID: '1',//hot placeholder
            page: 1,
            position: window.location.href, //gets the url of the page, yet unused
        };
    }


    loadPosts() {
        this.setState({
            page: this.state.page + 1
        });
        this.props.fetchPosts(parseInt(this.props.match.params.forumId), this.state.page);
    }

    click() {
        console.dir(this.props);
    }

    render() {
        let posts = "";
        let tillMax = 'block';
        if (this.props.posts[0]) {
            posts = this.props.posts.map(post => (
                <div key={post.content[0].id}>
                    <LilPost title={post.content[0].title} likes={post.content[0].likes}
                             dislikes={post.content[0].dislikes} content={post.content[0].content}/>
                </div>
            ));
            tillMax = !this.props.posts[this.props.posts.length - 1].last ? 'block' : 'none';
        }


        return (
            <div className="rendered-lilposts">

                {posts}
                <div className={"load-more-wrapper"}>
                    <button className="load-more" onClick={this.loadPosts.bind(this)} style={{display: tillMax}}>Load
                        more
                        posts
                    </button>
                    <button className="load-more" onClick={this.click.bind(this)} style={{display: tillMax}}>click
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
        dispatch(searchForumByName(id))
    },
    fetchPosts: (forumId, forumPage) => {
        dispatch(fetchPosts(forumId, forumPage))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderLilPosts);