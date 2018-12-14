import React, {Component} from 'react';
import '../styles/lilPost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Navigation extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        title: "Title of the post",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce nibh. In rutrum. Aliquam erat volutpat. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. In dapibus augue non sapien. Integer lacinia. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Vivamus ac leo pretium faucibus. Integer vulputate sem a nibh rutrum consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aenean vel massa quis mauris vehicula lacinia.",
        comments: 2,
        thumbsUp: 9,
        thumbsDown: 5

    };


    render() {

        return (
            <div className="lilpost-wrapper">
                <div className={"lilpost"}>
                    <div className={"lilpost-header"}>{this.state.title}</div>
                    <div className={"lilpost-body"}>
                        <p>{this.state.content}</p>
                    </div>
                    <div className={"lilpost-footer"}>
                        <ul>
                            <li><i className="far fa-comment-alt fa-2x p-btn"/></li>
                            <li>{this.state.comments}</li>
                            <li><i className="fas fa-angle-up fa-2x p-btn"/></li>
                            <li>{this.state.thumbsUp}</li>
                            <li><i className="fas fa-angle-down fa-2x p-btn"/></li>
                            <li>{this.state.thumbsDown}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;