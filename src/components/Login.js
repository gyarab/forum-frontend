import React, {Component} from 'react';
import '../styles/auth.scss'
import PropTypes from 'prop-types';
import {logIn} from "../action-creators/forumActionCreator";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class Login extends Component {
    static defaultProps = {};

    static propTypes = {
        logIn: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit() {
        const credentials = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.logIn(credentials);
        this.setState({username: "", password: ""})

    }

    render() {
        return (
            <div className="parent">
                <div className="auth-wrapper">

                    {this.props.error ? <p style={{color: "red"}}>{this.props.error}</p> : ""}
                    <input className="input" name="username" placeholder="E-Mail"
                           onChange={this.onChange}
                           value={this.state.username}/>
                    <input type="password" className="input" name="password" placeholder="Password"
                           onChange={this.onChange}
                           value={this.state.password}/>
                        <input type="submit" className="input button-submit" value="Login"
                               onClick={this.submit}/>
                    <NavLink to={"/register"}><p style={{marginLeft:'auto',marginRight:'auto'}}>Or Register here</p></NavLink>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.forums.error
});

export default connect(mapStateToProps, {logIn})(Login);
