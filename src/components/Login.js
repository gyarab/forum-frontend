import React, {Component} from 'react';
import '../styles/auth.scss'
import PropTypes from 'prop-types';
import {logIn} from "../action-creators/authActionCreator";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {resetPosts} from "../action-creators/forumActionCreator";

class Login extends Component {
    static defaultProps = {};

    static propTypes = {
        logIn: PropTypes.func.isRequired,
        resetPosts: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
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
            email: this.state.email,
            password: this.state.password
        };
        this.props.logIn(credentials);
        this.setState({email: "", password: ""})

    }

    redirect() {
        if (localStorage.getItem("logged")) {
            this.props.resetPosts();
            return <Redirect to="/"/>
        }
    }


    render() {
        return (
            <div className="parent">
                <div className="auth-wrapper">
                    {this.redirect()}
                    {typeof this.props.status === "string" ? <p style={{color: "red"}}>{this.props.status}</p> : ""}
                    <input type="email" className="input" name="email" placeholder="E-Mail"
                           onChange={this.onChange}
                           value={this.state.email}/>
                    <input type="password" className="input" name="password" placeholder="Password"
                           onChange={this.onChange}
                           value={this.state.password}/>
                    <input type="submit" className="input button-submit" value="Login"
                           onClick={this.submit}/>
                    <NavLink to={"/register"}><p style={{marginLeft: 'auto', marginRight: 'auto'}}>Or Register here</p>
                    </NavLink>
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
    resetPosts: () => {
        dispatch(resetPosts())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
