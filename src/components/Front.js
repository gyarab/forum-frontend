import React, {Component} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import RenderLilPosts from "./RenderLilPosts";

class Front extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div><RenderLilPosts /></div>
        );
    }
}

export default Front;
