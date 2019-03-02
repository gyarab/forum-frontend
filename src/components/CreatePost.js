import React, {Component} from 'react';
import '../styles/createPost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

class LilPost extends Component {

    static defaultProps = {};

    static propTypes = {};

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

    handleChange(event){
        event.preventDefault();
        this.setState({ [event.target.className]: event.target.value });
    }

    toggleModal(event){
        event.preventDefault();
        this.setState({modalOpened: !this.state.modalOpened});
    }


    render() {

        let modalToggle = !this.state.modalOpened ? 'none' : 'block';

        return (
            <div className="createpost-wrapper">
                <button className="createpost-open" onClick={this.toggleModal.bind(this)}>+</button>
                <span className="createpost-slider">Create a post</span>
                <div className="createpost-overlay" style={{display: modalToggle}} onClick={this.toggleModal.bind(this)} />
                <div className="createpost" style={{display: modalToggle}}>
                    <form className="createpost-form" onSubmit={this.toggleModal.bind(this)}>
                        <button className="close-modal" onClick={this.toggleModal.bind(this)}>&#x00D7;</button>
                        <label className="title-label" for="title">Title of your post:
                        <input type="text" id="title" className="title"  placeholder="What is the title of your post" onChange={this.handleChange.bind(this)}/></label>
                        <label className="title-label" for="content">Content of your post:
                        <textarea className="content"  id="content" placeholder="What is the message you want to convey" onChange={this.handleChange.bind(this)}/></label>
                        <button className="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LilPost;