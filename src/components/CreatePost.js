import React, {Component} from 'react';
import '../styles/createPost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import connect from "react-redux/es/connect/connect";
import {createPost} from "../action-creators/forumActionCreator";
import PropTypes from "prop-types";
import ReactQuill from 'react-quill';

class CreatePost extends Component {

    static defaultProps = {};

    static propTypes = {};

    componentDidMount() {
        if (this.props.match.params.forumId === undefined) {
            this.setState({forumId: 1})
        } else {
            this.setState({forumId: parseInt(this.props.match.params.forumId)})
        }
    }

    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            forumId: 0,
            thread: "",
            modalOpened: false,
        };
    }

    handleChange(event) {
        this.setState({[event.target.className]: event.target.value});
    }

    handleQuill(event) {
        this.setState({content: event})

    }

    toggleModal(event) {
        event.preventDefault();
        this.setState({modalOpened: !this.state.modalOpened});
    }

    handleSubmit(event) {
        event.preventDefault();
        let post = {
            title: this.state.title,
            content: this.state.content,
            forum: this.state.forum,
            likes: 1,
            dislikes: 0
        };
        this.props.createPost(post);
        this.toggleModal(event);
    }

    click() {
        console.log(this.state.content);
    }

    render() {

        let modalToggle = !this.state.modalOpened ? 'none' : 'block';

        return (
            <div className="createpost-wrapper">
                <button className="createpost-open" onClick={this.toggleModal.bind(this)}>+</button>
                <span className="createpost-slider">Create a post</span>
                <div className="createpost-overlay" style={{display: modalToggle}}
                     onClick={this.toggleModal.bind(this)}/>
                <div className="createpost" style={{display: modalToggle}}>
                    <form className="createpost-form" onSubmit={this.handleSubmit.bind(this)}>
                        <button className="close-modal" onClick={this.toggleModal.bind(this)}>&#x00D7;</button>
                        <input type="text" className="title" placeholder="What is the title of your post"
                               onChange={this.handleChange.bind(this)}/>
                        <ReactQuill value={this.state.content} onChange={this.handleQuill.bind(this)}/>
                        <button className="submit">Submit</button>
                    </form>
                    <button className="load-more" onClick={this.click.bind(this)}>click</button>
                </div>
            </div>
        );
    }
}

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(CreatePost);