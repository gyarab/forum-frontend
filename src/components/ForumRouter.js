import React, {Component} from 'react';
import Navigation from "./Navigation";
import {Route} from "react-router-dom";
import Front from "./Front";
import Login from "./Login";
import Bigpost from "./Bigpost";
import CreatePost from "./CreatePost";

class ForumRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/" component={Navigation}/>
                <Route path="/" exact component={Front}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/begmy" exact component={Bigpost}/>
            </div>
        );
    }
}

export default ForumRouter;
