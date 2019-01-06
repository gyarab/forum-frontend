import React, {Component} from 'react';
import '../styles/bigpost.scss';

class Bigpost extends Component {
    state = {
        title:"BIGPOST",
        content:"BLAALBLBLALLBLBLBBL",
        thumbsUp:6,
        thumbsDown:65,
        comments:""
    };

    onChange(event) {
        let input = event.target.value;
        if (input.length >= 1) {
            this.setState({comments: input});
        }

    }
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
                    <form>
                        <input type="text" onChange={this.onChange.bind(this)}  placeholder="Type a comment here" name="negr"></input>
                        <input type="submit" value="Submit comment" ></input>

                    </form>
                    <p>{this.state.comments}</p>
                </div>
            </div>






        );
        }
}
    // function addComment(element) {
    // this.setState({
    //         comments: this.state.arr.concat(element)
    //     });
    // }
export default Bigpost;