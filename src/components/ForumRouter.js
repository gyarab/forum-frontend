import React, {Component} from 'react';
import Navigation from "./Navigation";
import {Route} from "react-router-dom";
import Front from "./Front";

class ForumRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/" component={Navigation}/>
                <Route path="/" exact component={Front}/>
            </div>
        );
    }
}

export default ForumRouter;
