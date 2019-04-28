import React, {Component} from 'react';
import '../styles/lilPost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {NavLink} from 'react-router-dom';
import {updatePost} from "../action-creators/postActionCreator";
import {connect} from "react-redux";


class LilPost extends Component {


    static defaultProps = {};

    componentWillReceiveProps(nextProps) {
        if (this.props.id === nextProps.updatedId) {
            this.setState({
                likes: nextProps.updatedLikes,
                dislikes: nextProps.updatedDislikes,
                attitude: nextProps.updatedAttitude
            })
        }
    }


    static propTypes = {};
    state = {
        likes: this.props.likes,
        dislikes: this.props.dislikes,
        attitude: this.props.attitude.attitude,
        logged: this.props.attitude.lemonUserId
    };

    render() {
        let likeClass = "fas fa-angle-up fa-2x interactive-button";
        if (this.state.attitude === "LIKE") likeClass += ' active';
        else likeClass = "fas fa-angle-up fa-2x interactive-button";

        let dislikeClass = "fas fa-angle-down fa-2x interactive-button";
        if (this.state.attitude === "DISLIKE") dislikeClass += ' active';
        else dislikeClass = "fas fa-angle-down fa-2x interactive-button";

        return (

            <div className="lilpost-wrapper">
                <div className="lilpost">
                    <NavLink to={"/bigpost/" + this.props.id} style={{textDecoration: "none", color: "black"}}>
                        <div className="lilpost-header">{this.props.title}</div>

                        <div className="lilpost-body">
                            <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
                        </div>
                    </NavLink>
                    <div className="lilpost-footer">
                        {this.state.logged ?
                            <ul>
                                <li onClick={() => {
                                    console.info("here");
                                    this.props.updatePost("like", this.props.id)
                                }}>
                                    <i className={likeClass}/>
                                </li>
                                <li>{this.state.likes}</li>

                                <li onClick={() => {
                                    this.props.updatePost("dislike", this.props.id)
                                }}>
                                    <i className={dislikeClass}/>
                                </li>
                                <li>{this.state.dislikes}</li>
                            </ul> : ""}
                    </div>

                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    updatedId: state.forums.updated.post.id,
    updatedLikes: state.forums.updated.post.likes,
    updatedDislikes: state.forums.updated.post.dislikes,
    updatedAttitude: state.forums.updated.attitudeDto.attitude
});

export default connect(mapStateToProps, {updatePost})(LilPost);