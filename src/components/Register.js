import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '../styles/auth.scss'
import {NavLink} from "react-router-dom";

class Register extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div>
                <div className="parent">
                    <div className="auth-wrapper">

                        {this.props.error ? <p style={{color: "red"}}>{this.props.error}</p> : ""}
                        <input type="email" className="input" name="username" placeholder="E-mail"
                               onChange={this.onChange}
                               value={this.state.username}/>
                        <input type="password" className="input" name="password" placeholder="Password"
                               onChange={this.onChange}
                               value={this.state.password}/>
                        <input type="password" className="input" name="password" placeholder="Re-enter Password"
                               onChange={this.onChange}
                               value={this.state.password}/>
                        <input type="submit" className="input button-submit" value="Register"
                               onClick={this.submit}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
