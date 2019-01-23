import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchForums, fetchForumById} from "../action-creators/forumActionCreator";
import connect from "react-redux/es/connect/connect";
import '../styles/renderLilPosts.scss';
import LilPost from "./LilPost";

class RenderLilPosts extends Component {


    componentDidMount(){
        this.props.fetchForums()
    }

    componentDidUpdate(prevProps){
        if (prevProps.posts !== this.props.posts && prevProps.posts.length === 0) {
            this.loadPosts()
        }
    }


    loadPosts() {
        let list = this.state.posts;
        let sliceEm = this.props.posts.slice(0, this.state.numberOfPosts)
        sliceEm.map(post => {
            list.push(post);
        });
        this.setState(
            {
                posts: list
            }
        );
    }

    constructor() {
        super();
        this.state = {
            forumID: '1',//hot placeholder
            numberOfPosts: 5,
            maxPosts: false,
            position: window.location.href, //gets the url of the page, yet unused
            posts: []
        };
    }

    /*loadMorePosts() {
        if (this.state.numberOfPosts + 5 < this.props.forums.length && !this.state.maxPosts) {
            this.setState({numberOfPosts: this.state.numberOfPosts + 5})
        } else {
            for (let i = 0; i < 5; i++) {
                if ((this.state.numberOfPosts + i) === (this.props.forums.length)) {
                    this.setState({
                        numberOfPosts: (this.state.numberOfPosts + i),
                        maxPosts: true
                    });
                    break;
                }
            }
        }
    }
    */

    render() {
        let posts = this.state.posts.map(post => (
            <div key={post.id}>
                <LilPost title={post.title} thumbsUp={post.likes} thumbsDown={post.dislikes} content={post.content}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RenderLilPosts);