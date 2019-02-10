import React, {Component} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import RenderLilPosts from "./RenderLilPosts";
import CreatePost from "./CreatePost"

class Front extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div><RenderLilPosts />
            <CreatePost />
            </div>
        );
    }
}

export default Front;
