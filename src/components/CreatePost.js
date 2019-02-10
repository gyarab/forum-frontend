import React, {Component} from 'react';
import '../styles/createPost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

class LilPost extends Component {

    static defaultProps = {};

    static propTypes = {};

    constructor() {
        super();
        this.state = {
            id: 0,
            title: "",
            content: "",
            dislikes: 0,
            likes: 0,
            forumId: 0,
            thread: "",
            isOpen: false
        };
    }

    submitPost(event){
        event.preventDefault();
    }

    toggleModal(event){
        event.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {

        let toggle = !this.state.isOpen ? 'none' : 'block';

        return (
            <div>
                <button className="createpost-open" onClick={this.toggleModal.bind(this)}>Create post</button>
                <div className="createpost-overlay" style={{display: toggle}} onClick={this.toggleModal.bind(this)}>
                    <div className="createpost" style={{display: toggle}}>
                        <form className="createpost-form" onSubmit={this.submitPost}>
                            <label>Title of your post:</label>
                            <input type="text" className="title-input"  placeholder="Title of your post"/>
                            <br />
                            <label>Content of your post:</label>

                            <textarea className="content-input" placeholder="Your message" />
                            <br />
                            <button className="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LilPost;