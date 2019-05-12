import React, {Component} from 'react';
import '../styles/accountInfo.scss';
import connect from "react-redux/es/connect/connect";

class AccountInfo extends Component {

    constructor() {
        super();

        this.state = {
            userJson: JSON.parse(atob(localStorage.getItem("auth").split(".")[1])),

        };
    }

    render() {

        return (
            <div className="accountinfo">
                {/*Shows the email if logged in*/}
                <div className="username-wrapper">You are logged in as {this.state.userJson.sub}</div>
            </div>
        );
    }
}

export default connect()(AccountInfo);