import React, {Component} from 'react';
import '../styles/accountInfo.scss';
import connect from "react-redux/es/connect/connect";

class AccountInfo extends Component {

    constructor() {
        super();
        this.state = {
            userName: "Placeholder",
            role: "Placeholder",
        };
    }

    render() {

        return (
            <div className="accountinfo">
                <div className="username-wrapper">You are logged in as {this.state.userName}</div>
                <div className="role-wrapper">Your role is {this.state.role}</div>
            </div>
        );
    }
}

export default connect()(AccountInfo);