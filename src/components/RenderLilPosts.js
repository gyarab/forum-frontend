import React, {Component} from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import '../styles/renderLilPosts.scss';
import LilPost from "./LilPost";
import CreatePost from "./CreatePost";
import {fetchPosts} from "../action-creators/postActionCreator";

class RenderLilPosts extends Component {


    componentDidMount() {
        if (this.props.posts.length === 0)
            this.load();
    }

    componentDidUpdate(prevProps) {
        if (this.props.posts.length === 0 && this.state.page!==1) {
            this.load();
        }
        if (prevProps.match.params.forumId !== this.props.match.params.forumId) {
            this.load();
        }
    }


    load() {
        this.setState({
            page: 1,
        });
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
        if (this.props.match.params.forumId === undefined) {
            this.props.fetchPosts(1, this.state.page);
        } else {
            this.props.fetchPosts(parseInt(this.props.match.params.forumId), this.state.page);
        }
        this.setState({
            page: this.state.page + 1
        });
    }

    render() {
        let posts = <div className="noposts">No posts in this forum yet</div>;
        let tillMax = 'none';
        if (typeof this.props.posts[0] !== "undefined") {
            if (typeof this.props.posts[0].content !== "undefined" && typeof this.props.posts[0].content[0] !== "undefined") {
                posts = this.props.posts.map(post => (
                    <div key={post.content[0].post.id}>
                        <LilPost id={post.content[0].post.id} title={post.content[0].post.title}
                                 attitude={post.content[0].attitudeDto} likes={post.content[0].post.likes}
                                 dislikes={post.content[0].post.dislikes} content={post.content[0].post.content}
                                 owner={post.content[0].post.owner} userId={post.content[0].post.userId}
                        />
                    </div>
                ));
                tillMax = !this.props.posts[this.props.posts.length - 1].last ? 'block' : 'none';
            }
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
                {localStorage.getItem("logged") ? <CreatePost match={this.props.match}/> : ""}
            </div>
        );
    }
}

RenderLilPosts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    posts: state.forums.posts
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (forumId, forumPage) => {
        dispatch(fetchPosts(forumId, forumPage))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderLilPosts);