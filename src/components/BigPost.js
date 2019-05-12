import React, {Component} from 'react';
import '../styles/bigpost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {connect} from "react-redux";
import {deletePost, fetchPostById, getPostById, updatePost} from "../action-creators/postActionCreator";
import PropTypes from "prop-types";
import {fetchComments, createComment} from "../action-creators/commentActionCreator";
import Comment from "./Comment";
import {Redirect} from "react-router-dom";

class BigPost extends Component {

    state = {
        comments: this.props.comments,
        content: "",
        likes: 0,
        dislikes: 0,
        attitude: this.props.attitude.attitude,
        redirect: false,
    };

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.postId, 1)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.post.id !== parseInt(this.props.match.params.postId)) {
            this.props.fetchPostById(this.props.match.params.postId);
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            likes: nextProps.post.likes,
            dislikes: nextProps.post.dislikes,
        });
        if (nextProps.updatedLikes !== undefined) {
            this.setState({
                likes: nextProps.updatedLikes,
                dislikes: nextProps.updatedDislikes,
                attitude: nextProps.updatedAttitude
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let babyComment = {
            content: this.state.content,
            likes: 0,
            dislikes: 0,
        };
        this.setState({content: ""});
        this.props.createComment(babyComment, this.props.match.params.postId);

    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            content: event.target.value
        });
    }

    renderRedirect ()  {
        if (this.state.redirect) {
            return <Redirect to="/"/>
        }
    }

    render() {
        /*Creating html of comments received in props*/
        let commentElements = "";
        if (typeof this.props.comments.content !== "undefined") {
            commentElements = this.props.comments.content.map(comment => {
                    return <Comment key={comment.comment.id} idr={comment.comment.id}
                                    content={comment.comment.content} likes={comment.comment.likes}
                                    dislikes={comment.comment.dislikes} attitude={comment.attitudeDto}
                                    owner={comment.comment.owner} userId={comment.comment.userId}/>
                }
            );
        }
        let likeClass = "fas fa-angle-up fa-2x interactive-button";
        if (this.state.attitude === "LIKE") likeClass += ' active';
        else likeClass = "fas fa-angle-up fa-2x interactive-button";

        let dislikeClass = "fas fa-angle-down fa-2x interactive-button";
        if (this.state.attitude === "DISLIKE") dislikeClass += ' active';
        else dislikeClass = "fas fa-angle-down fa-2x interactive-button";
        return (

            <div className="bigpost-wrapper">
                {this.renderRedirect()}
                {/*Dominikuv kod :)*/}
                <div className="bigpost">

                    <div className="bigpost-header">{this.props.post.owner === this.props.attitude.username ?
                        <i onClick={() => {
                            this.props.delete(this.props.post.id);
                            this.setState({redirect:true})
                        }} className="hover fas fa-trash"/> :
                        <i className="hover">{this.props.post.owner}</i>}<span>{this.props.post.title}</span></div>
                    <div dangerouslySetInnerHTML={{__html: this.props.post.content}} className="bigpost-body"/>

                    <div className="bigpost-footer">
                        <ul>
                            <li onClick={() => {
                                this.props.updatePost("like", this.props.post.id)
                            }}>
                                <i className={likeClass}/>
                            </li>

                            <li className="bigpost-like">{this.state.likes}</li>

                            <li onClick={() => {
                                this.props.updatePost("dislike", this.props.post.id)
                            }}>
                                <i className={dislikeClass}/>
                            </li>

                            <li className="bigpost-dislike">
                                {this.state.dislikes}
                            </li>
                        </ul>

                    </div>

                </div>
                <div className="bigpost-form">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <textarea className="bigpost-textarea" rows="3"
                                  placeholder="What are your thoughts about this?"
                                  onChange={this.handleChange.bind(this)}
                                  value={this.state.content}/>
                        <input type="submit" className="bigpost-submit-button" value="Comment"/>
                    </form>

                    <button onClick={() => {
                        console.log(this.props.post)
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
    updatePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    post: state.forums.post.post,
    comments: state.forums.comments,
    attitude: state.forums.post.attitudeDto,
    updatedLikes: state.forums.updatedPost.post.likes,
    updatedDislikes: state.forums.updatedPost.post.dislikes,
    updatedAttitude: state.forums.updatedPost.attitudeDto.attitude
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
    },
    updatePost: (type, id) => {
        dispatch(updatePost(type, id))
    },
    delete: (id) => {
        dispatch(deletePost(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BigPost);