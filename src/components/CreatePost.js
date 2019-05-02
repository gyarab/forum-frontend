import React, {Component} from 'react';
import '../styles/createPost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import connect from "react-redux/es/connect/connect";
import {createPost} from "../action-creators/postActionCreator";
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
        let post = {
            title: this.state.title,
            content: this.state.content,
            likes: 0,
            dislikes: 0
        };
        this.props.createPost(post,this.state.forumId);
        this.toggleModal(event);
    }

    render() {

        /*Style toggle for modal*/
        let modalToggle = !this.state.modalOpened ? 'none' : 'block';

        return (
            <div className="createpost-wrapper">
                {/*Button which opens the modal*/}
                <button className="createpost-open" onClick={this.toggleModal.bind(this)}>+</button>
                {/*Slider*/}
                <span className="createpost-slider">Create a post</span>
                {/*Overlay under the modal*/}
                <div className="createpost-overlay" style={{display: modalToggle}}
                     onClick={this.toggleModal.bind(this)}/>
                {/*Modal itself*/}
                <div className="createpost" style={{display: modalToggle}}>
                    {/*Form for creating a post*/}
                    <form className="createpost-form" onSubmit={this.handleSubmit.bind(this)}>
                        {/*Close button*/}
                        <button className="close-modal" onClick={this.toggleModal.bind(this)}>&#x00D7;</button>
                        {/*Title input field*/}
                        <input type="text" className="title" placeholder="What is the title of your post"
                               onChange={this.handleChange.bind(this)}/>
                        {/*Input field for content of the post, rich text editor*/}
                        <ReactQuill modules={CreatePost.modules} value={this.state.content}
                                    onChange={this.handleQuill.bind(this)}/>
                        {/*Submit button*/}
                        <button className="submit">Submit</button>
                    </form>
                    <div dangerouslySetInnerHTML= {{__html:this.state.content}}></div>
                </div>
            </div>
        );
    }
}

CreatePost.modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ]
};

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(CreatePost);