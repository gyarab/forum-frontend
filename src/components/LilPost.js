import React, {Component} from 'react';
import '../styles/lilPost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {NavLink} from 'react-router-dom';
import {deletePost, resetPosts, updatePost} from "../action-creators/postActionCreator";
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
        logged: this.props.attitude.lemonUserId,
        username: this.props.owner
    };

    render() {
        /*Style of like and dislike button dependant on attitude*/
        let likeClass = "fas fa-angle-up fa-2x interactive-button";
        if (this.state.attitude === "LIKE") likeClass += ' active';
        else likeClass = "fas fa-angle-up fa-2x interactive-button";

        let dislikeClass = "fas fa-angle-down fa-2x interactive-button";
        if (this.state.attitude === "DISLIKE") dislikeClass += ' active';
        else dislikeClass = "fas fa-angle-down fa-2x interactive-button";

        return (
            <div className="lilpost-wrapper">
                {/*The lilpost itself*/}
                <div className="lilpost">
                    {/*Header and body wrapped in link to the corresponding BigPost*/}
                    <NavLink to={"/bigpost/" + this.props.id} style={{textDecoration: "none", color: "black"}}>
                        {/*Header*/}
                        <div className="lilpost-header">
                            {this.props.title}
                        </div>
                        {/*Body*/}
                        <div className="lilpost-body">
                            <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
                        </div>
                    </NavLink>
                    {/*Footer*/}
                    <div className="lilpost-footer">
                        {/*Likes, dislikes and author visible only if logged*/}
                        {this.state.logged ?
                            <div>
                                {/*List of buttons and numbers*/}
                                <ul>
                                    {/*Like button*/}
                                    <li onClick={() => {
                                        console.info("here");
                                        this.props.updatePost("like", this.props.id)
                                    }}>
                                        <i className={likeClass}/>
                                    </li>
                                    {/*Number of likes*/}
                                    <li>{this.state.likes}</li>

                                    {/*Dislike button*/}
                                    <li onClick={() => {
                                        this.props.updatePost("dislike", this.props.id)
                                    }}>
                                        <i className={dislikeClass}/>
                                    </li>
                                    {/*Number of dislikes*/}
                                    <li>{this.state.dislikes}</li>
                                    <div className="lilpost-username-wrapper"> {this.props.userId === this.props.attitude.lemonUserId ?
                                        <i onClick={()=>{
                                            this.props.delete(this.props.id)
                                        }} className="hover fas fa-trash"/>
                                        : "Post by:"+ this.state.username}</div>
                                </ul>
                                {/*Displays name of the author of the post*/}

                            </div> : ""}
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    updatedId: state.forums.updatedPost.post.id,
    updatedLikes: state.forums.updatedPost.post.likes,
    updatedDislikes: state.forums.updatedPost.post.dislikes,
    updatedAttitude: state.forums.updatedPost.attitudeDto.attitude
});
const mapDispatchToProps = (dispatch) => ({
    updatePost: (type,id) => {
        dispatch(updatePost(type,id))
    },
    delete: (id) =>{
        dispatch(deletePost(id))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LilPost);