import React, {Component} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import LilPost from "./LilPost";

class Front extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div><LilPost ahoj="jak se mas"/><LilPost/><LilPost/><LilPost/></div>
        );
    }
}

export default Front;
