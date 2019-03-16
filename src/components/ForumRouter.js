import React, {Component} from 'react';
import Navigation from "./Navigation";
import {Route} from "react-router-dom";
import Front from "./Front";
import Login from "./Login";
import Bigpost from "./Bigpost";

class ForumRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/" component={Navigation}/>
                <Route path="/" exact component={Front}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/begmy" exact component={Bigpost}/>
                <Route path={`/:forumId`} exact component={Front}/>
            </div>
        );
    }
}

export default ForumRouter;
