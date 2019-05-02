import React, {Component} from 'react';
import Navigation from "./Navigation";
import {Route} from "react-router-dom";
import Login from "./Login";
import BigPost from "./BigPost";
import RenderLilPosts from "./RenderLilPosts";
import Register from "./Register";


class ForumRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/" component={Navigation}/>
                <Route path="/" exact component={RenderLilPosts}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path={`/forums/:forumId`} exact component={RenderLilPosts}/>
                <Route path={`/bigpost/:postId`} component={BigPost}/>
            </div>
        );
    }
}

export default ForumRouter;
