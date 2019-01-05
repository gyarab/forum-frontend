import React, {Component} from 'react';
import '../styles/bigpost.scss';

class Bigpost extends Component {
    state = {
        title:"BIGPOST",
        content:"BLAALBLBLALLBLBLBBL",
        thumbsUp:6,
        thumbsDown:65,
        comments:[]
    };


    render(){
        return(
            <div className="Bigpost">
                <div className="Bigpost-Header">{this.state.title}</div>
                <div className="Bigpost-Body">{this.state.content}</div>
                <div className="Bigpost-Footer">
                    <ul>
                        <li>Posted by USER_ID</li>
                        <li><i className="fas fa-angle-up fa-2x interactive-button" /></li>
                        <li>{this.state.thumbsUp}</li>
                        <li><i className="fas fa-angle-down fa-2x interactive-button" /></li>
                        <li>{this.state.thumbsDown}</li>
                    </ul>
                </div>
                <div className="Bigpost-Form">
                    <form value="" onSubmit="addComment(this.value)">
                        <input type="text"  placeholder="Type a comment here" name="negr"></input>
                        <input type="submit" value="Submit comment" ></input>

                    </form>
                </div>
            </div>






        );
        }
}
    function addComment(element) {
    return false;
    this.setState({
            comments: this.state.arr.concat(element)
        });
    }
export default Bigpost;