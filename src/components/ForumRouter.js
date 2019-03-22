import React, {Component} from 'react';
import Navigation from "./Navigation";
import {Route} from "react-router-dom";
import Login from "./Login";
import Bigpost from "./Bigpost";
import RenderLilPosts from "./RenderLilPosts";

class ForumRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/" component={Navigation}/>
                <Route path="/" exact component={RenderLilPosts}/>
                <Route path="/login" exact component={Login}/>
                <Route path={`/forum/:forumId`} exact component={RenderLilPosts}/>
                <Route path={`/bigpost/:postId`} component={Bigpost}/>
            </div>
        );
    }
}

export default ForumRouter;
