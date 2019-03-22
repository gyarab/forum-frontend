import React, {Component} from 'react';
import '../styles/lilPost.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {NavLink} from 'react-router-dom'


class LilPost extends Component {


    static defaultProps = {};

    static propTypes = {};


    render() {

        return (
            <NavLink to={"/bigpost/"+this.props.id}>
                <div className="lilpost-wrapper">
                    <div className="lilpost">
                        <div className="lilpost-header">{this.props.title}</div>

                        <div className="lilpost-body">
                            <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
                        </div>
                        <div className="lilpost-footer">
                            <ul>
                                <li><i className="fas fa-comments fa-2x interactive-button"/></li>
                                <li>2</li>
                                <li><i className="fas fa-angle-up fa-2x interactive-button"/></li>
                                <li>{this.props.likes}</li>
                                <li><i className="fas fa-angle-down fa-2x interactive-button"/></li>
                                <li>{this.props.dislikes}</li>
                            </ul>
                            <button onClick={()=>{console.log(this.props)}}>Ahoj</button>
                        </div>
                    </div>
                </div>
            </NavLink>
        );
    }
}

export default LilPost;