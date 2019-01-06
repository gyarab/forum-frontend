import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchAllForums, fetchForumById} from "../action-creators/forumActionCreator";
import connect from "react-redux/es/connect/connect";
import LilPost from './LilPost';
import '../styles/renderLilPosts.scss';

class RenderLilPosts extends Component {


    componentDidMount() {
        this.props.fetchAllForums();
        console.log(this.props.forums.length)
    }


    constructor() {
        super();
        this.state = {
            forumID: '1',//hot placeholder
            numberOfPosts: 10,
            maxPosts: false,
            position: window.location.href //gets the url of the page, yet unused
        };
    }

    loadMorePosts = () => {
        if(this.state.numberOfPosts+5<this.props.forums.length && !this.state.maxPosts) {
            this.setState({numberOfPosts: this.state.numberOfPosts + 5})
        } else {
            for(let i = 0; i<5; i++){
                if((this.state.numberOfPosts+i) === (this.props.forums.length)) {
                    this.setState({
                        numberOfPosts: (this.state.numberOfPosts + i),
                        maxPosts: true
                    })
                    break;
                }
            }
        }
    }

    render() {
        this.props.fetchForumById(this.state.forumID);
        let slicedPosts = this.props.forums.slice(0,this.state.numberOfPosts);
        let posts = slicedPosts.map(post => (
            <div key={post.id}>
                <LilPost title={post.title}/>
            </div>
        ));
        let tillMax = !this.state.maxPosts ? 'block' : 'none';

        return (
            <div className="rendered-lilposts">
                {posts}
                <div className={"load-more-wrapper"}>
                    <button className="load-more" onClick={this.loadMorePosts} style={{display: tillMax}}>Load more posts</button>
                </div>
            </div>
        );
    }
}

RenderLilPosts.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(RenderLilPosts);
