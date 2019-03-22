import React, {Component} from 'react';
import '../styles/lilPost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';


class LilPost extends Component {


    static defaultProps = {};

    static propTypes = {};


    state = {
        title: this.props.title,
        content: this.props.content,
        comments: 2,
        likes: this.props.likes,
        dislikes: this.props.dislikes
    };

    render() {

        return (
            <div className="lilpost-wrapper">
                <div className="lilpost">
                    <div className="lilpost-header">{this.state.title}</div>

                    <div className="lilpost-body">
                        <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
                    </div>
                    <div className="lilpost-footer">
                        <ul>
                            <li><i className="fas fa-comments fa-2x interactive-button"/></li>
                            <li>{this.state.comments}</li>
                            <li><i className="fas fa-angle-up fa-2x interactive-button"/></li>
                            <li>{this.state.likes}</li>
                            <li><i className="fas fa-angle-down fa-2x interactive-button"/></li>
                            <li>{this.state.dislikes}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default LilPost;