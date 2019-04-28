import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateComment} from "../action-creators/commentActionCreator";

class Comment extends Component {
    static defaultProps = {};

    static propTypes = {};

    componentWillReceiveProps(nextProps) {
        if (this.props.idr === nextProps.updatedId) {
            this.setState({
                likes: nextProps.updatedLikes,
                dislikes: nextProps.updatedDislikes,
                attitude: nextProps.updatedAttitude
            })
        }
    }

    state = {
        likes:this.props.likes,
        dislikes:this.props.dislikes,
        attitude: this.props.attitude.attitude,
        user: this.props.attitude.lemonUserId,
    };

    render() {
        let likeClass="fas fa-angle-up fa-2x interactive-button";
        if(this.state.attitude === 'LIKE') likeClass+=" active";
        else likeClass="fas fa-angle-up fa-2x interactive-button";

        let dislikeClass="fas fa-angle-down fa-2x interactive-button";
        if(this.state.attitude==='DISLIKE') dislikeClass+=" active";
        else dislikeClass="fas fa-angle-down fa-2x interactive-button";

        return (
            <div className="comment" key={this.props.idr}>
                <div className="comment-header">Author placeholder</div>
                <div className="comment-body">{this.props.content}</div>
                <div className="comment-footer">
                    <ul>
                        <li onClick={() => {
                            this.props.updateComment("like", this.props.idr)
                        }}>
                            <i className={likeClass}/>
                        </li>
                        <li>{this.state.likes}</li>

                        <li onClick={() => {
                            this.props.updateComment("dislike", this.props.idr)
                        }}>
                            <i className={dislikeClass}/>
                        </li>
                        <li>{this.state.dislikes}</li>
                    </ul>
                </div>
                <button onClick={()=>{console.log(this.state)}}>Ahoj</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    updatedId: state.forums.updatedComment.comment.id,
    updatedLikes: state.forums.updatedComment.comment.likes,
    updatedDislikes: state.forums.updatedComment.comment.dislikes,
    updatedAttitude: state.forums.updatedComment.attitudeDto.attitude
});
export default connect(mapStateToProps,{updateComment} )(Comment);
