import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '../styles/auth.scss'
import {Redirect} from "react-router-dom";
import {resetPosts} from "../action-creators/forumActionCreator";
import connect from "react-redux/es/connect/connect";
import {logIn, register} from "../action-creators/authActionCreator";

class Register extends Component {
    static defaultProps = {};

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rePassword: '',
            error: ''
        };
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    redirect() {
        if (localStorage.getItem("logged")) {
            resetPosts();
            return <Redirect to="/"/>
        }
    }

    submit() {
        if (this.state.password === this.state.rePassword && this.state.password.length > 5) {
            let creds = {email: this.state.email, password: this.state.password}
            this.props.register(creds);
        }
        else this.setState({error: "Password doesn't match or isn't at least 6 characters long."})
    }

    render() {
        return (
            <div>
                <div className="parent">
                    <div className="auth-wrapper">
                        {this.redirect()}
                        {this.state.error}
                        {this.props.status ? <p style={{color: "red"}}>{this.props.status}</p> : ""}
                        <input type="email" className="input" name="email" placeholder="E-mail"
                               onChange={this.onChange}
                               value={this.state.email}/>
                        <input type="password" className="input" name="password" placeholder="Password"
                               onChange={this.onChange}
                               value={this.state.password}/>
                        <input type="password" className="input" name="rePassword" placeholder="Re-enter Password"
                               onChange={this.onChange}
                               value={this.state.rePassword}/>
                        <input type="submit" className="input button-submit" value="Register"
                               onClick={this.submit}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    status: state.forums.status
});
const mapDispatchToProps = (dispatch) => ({
    logIn: (credentials) => {
        dispatch(logIn(credentials))
    },
    register: (creds) => {
        dispatch(register(creds))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
