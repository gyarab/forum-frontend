import React, {Component} from 'react';
import '../styles/bigpost.scss';
import {connect} from "react-redux";
import {getPostById} from "../action-creators/forumActionCreator";
import PropTypes from "prop-types";

class BigPost extends Component {

    componentDidMount(){
        this.props.getPostById(this.props.match.params.postId);
    }

    componentDidUpdate(){
        console.log(this.props)
    }

    state = {
        title: "BIGPOST",
        content: "BLAALBLBLALLBLBLBBL",
        thumbsUp: 6,
        thumbsDown: 65,
        comments: ""
    };

    onChange(event) {
        let input = event.target.value;
        if (input.length >= 1) {
            this.setState({comments: input});
        }

    }

    render() {
        return (
            <div className="Bigpost">
                <div className="Bigpost-Header">{this.props.post}</div>
                <div className="Bigpost-Body">{this.state.content}</div>
                <div className="Bigpost-Footer">
                    <ul>
                        <li>Posted by USER_ID</li>
                        <li><i className="fas fa-angle-up fa-2x interactive-button"/></li>
                        <li>{this.state.thumbsUp}</li>
                        <li><i className="fas fa-angle-down fa-2x interactive-button"/></li>
                        <li>{this.state.thumbsDown}</li>
                    </ul>
                </div>
                <div className="Bigpost-Form">
                    <form>
                        <input type="text" onChange={this.onChange.bind(this)} placeholder="Type a comment here"
                               name="negr"></input>
                        <input type="submit" value="Submit comment"></input>

                    </form>
                    <button onClick={()=>{console.log(this.props)}}>Ahoj</button>
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BigPost);