import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchPosts, searchForumByName} from "../action-creators/forumActionCreator";
import connect from "react-redux/es/connect/connect";
import '../styles/renderLilPosts.scss';
import LilPost from "./LilPost";
import CreatePost from "./CreatePost";

class RenderLilPosts extends Component {


    componentDidMount() {
        this.load();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.forumId !== this.props.match.params.forumId) {
            this.load();
        }
    }

    load() {
        console.log("Mah god");
        if (this.props.match.params.forumId === undefined) {
            this.props.fetchPosts(1, 0);
        } else {
            this.props.fetchPosts(parseInt(this.props.match.params.forumId), 0);
        }
    }

    constructor() {
        super();
        this.state = {
            page: 1,
        };
    }


    loadPosts() {
        this.setState({
            page: this.state.page + 1
        });
        if (this.props.match.params.forumId === undefined) {
            this.props.fetchPosts(1, this.state.page);
        } else {
            this.props.fetchPosts(parseInt(this.props.match.params.forumId), this.state.page);
        }
    }

    render() {
        let posts = "";
        let tillMax = 'block';
        if (this.props.posts[0]) {
            console.log(this.props.posts);
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
                </div>
                {!localStorage.getItem("logged") ? "" : <CreatePost match={this.props.match}/>}
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