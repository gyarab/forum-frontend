import React, {Component} from 'react';
import '../styles/bigpost.scss';
import {connect} from "react-redux";
import {fetchPostById, getPostById} from "../action-creators/forumActionCreator";
import PropTypes from "prop-types";

class BigPost extends Component {

    componentDidMount() {
        this.props.getPostById(this.props.match.params.postId);
    }

    componentDidUpdate() {
        if (this.props.post === undefined) {
            this.props.fetchPostById(this.props.match.params.postId);
        }
    }

    state = {
        comments: ""
    };

    onChange(event) {
        let input = event.target.value;
        if (input.length >= 1) {
            this.setState({comments: input});
        }

    }

    render() {
        let a = typeof (this.props.post) === "undefined" ? "" : this.props.post;
        return (
            <div className="Bigpost-Wrapper">
                <div className="Bigpost">
                    <div className="Bigpost-Header">{a.title}</div>
                    <div dangerouslySetInnerHTML={{__html: a.content}} className="Bigpost-Body"/>

                    <div className="Bigpost-Footer">
                        <ul>
                            <li ><i className="fas fa-angle-up fa-2x interactive-button"/></li>
                            <li className="Like">{a.likes}</li>
                            <li ><i className="fas fa-angle-down fa-2x interactive-button"/></li>
                            <li className="Dislike">{a.dislikes}</li>
                        </ul>
                    </div>

                </div>
                    <div className="Bigpost-Form">
                        <form>
                            <textarea  className="Textarea" rows="2" cols="90" placeholder="What are your thoughts about this?"></textarea>
                            <input type="submit" className="SubmitButton" value="Comment"/>

                        </form>
                        <button onClick={() => {
                            console.log(this.props)
                        }}>Ahoj
                        </button>
                        <p>{this.state.comments}</p>
                    </div>
            </div>
        );
    }
}

BigPost.propTypes = {
    getPostById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    post: state.forums.post
});


const mapDispatchToProps = (dispatch) => ({
    getPostById: (id) => {
        dispatch(getPostById(id))
    },
    fetchPostById: (id) => {
        dispatch(fetchPostById(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BigPost);