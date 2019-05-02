import React, {Component} from 'react';
import '../styles/bigpost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {connect} from "react-redux";
import {fetchPostById, getPostById} from "../action-creators/postActionCreator";
import PropTypes from "prop-types";
import {fetchComments, createComment} from "../action-creators/commentActionCreator";
import Comment from "./Comment";

class BigPost extends Component {

    componentDidMount() {
        this.props.getPostById(this.props.match.params.postId);
        this.props.fetchComments(this.props.match.params.postId, 1)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.post === undefined) {
            this.props.fetchPostById(this.props.match.params.postId);
        }
    }

    state = {
        comments: "",
        content: ""

    };

    handleSubmit(event) {
        event.preventDefault();
        let babyComment = {
            content: this.state.content,
            likes: 0,
            dislikes: 0,
            // post:this.props.match.params.postId
        };
        this.props.createComment(babyComment, this.props.match.params.postId);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            content: event.target.value
        });
    }

    render() {
        /*Creating html of comments received in props*/
        let a = typeof (this.props.post) === "undefined" ? "" : this.props.post;
        let commentElements = "";
        if (typeof this.props.comments.content !== "undefined") {
            commentElements = this.props.comments.content.map(comment => {
                    return <Comment key={comment.comment.id} idr={comment.comment.id}
                                    content={comment.comment.content} likes={comment.comment.likes}
                                    dislikes={comment.comment.dislikes} attitude={comment.attitudeDto}/>
                }
            );
        }
        return (
            <div className="Bigpost-Wrapper">
                {/*Dominikuv kod :)*/}
                <div className="Bigpost">
                    <div className="Bigpost-Header">{a.title}</div>
                    <div dangerouslySetInnerHTML={{__html: a.content}} className="Bigpost-Body"/>

                    <div className="Bigpost-Footer">
                        <ul>
                            <li><i className="fas fa-angle-up fa-2x interactive-button"/></li>
                            <li className="Like">{a.likes}</li>
                            <li><i className="fas fa-angle-down fa-2x interactive-button"/></li>
                            <li className="Dislike">{a.dislikes}</li>
                        </ul>
                    </div>

                </div>
                <div className="Bigpost-Form">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <textarea className="Textarea" rows="7"
                                  placeholder="What are your thoughts about this?"
                                  onChange={this.handleChange.bind(this)}/>
                        <input type="submit" className="SubmitButton" value="Comment"/>
                    </form>

                    <button onClick={() => {
                        console.log(typeof this.props.comments.content)
                    }}>Ahoj
                    </button>
                </div>
                {/*Displaying the comments html*/}
                <div className="comments-wrapper">
                    {commentElements}
                </div>
            </div>
        );
    }
}

BigPost.propTypes = {
    getPostById: PropTypes.func.isRequired,
    fetchPostById: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    post: state.forums.post,
    comments: state.forums.comments
});


const mapDispatchToProps = (dispatch) => ({
    getPostById: (id) => {
        dispatch(getPostById(id))
    },
    fetchPostById: (id) => {
        dispatch(fetchPostById(id))
    },
    fetchComments: (id, page) => {
        dispatch(fetchComments(id, page))
    },
    createComment: (comment, postId) => {
        dispatch(createComment(comment, postId))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BigPost);