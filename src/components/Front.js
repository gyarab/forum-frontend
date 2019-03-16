import React, {Component} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import RenderLilPosts from "./RenderLilPosts";
import CreatePost from "./CreatePost"

class Front extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    click(){
        console.dir(this.props);
    }

    render() {
        return (
            <div><RenderLilPosts match={this.props.match}/>
            <CreatePost />
                {/*<button onClick={this.click.bind(this)} style={{padding:"50px"}}>click</button>*/}
            </div>

        );
    }
}

export default Front;
