import React, {Component} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import '../styles/navigation.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'w3-css/w3.css';

class Navigation extends Component {
    static defaultProps = {};

    static propTypes = {};

    constructor() {
        super();

        this.state = {
            display: true
        }
    }


    render() {
        return (
            <div style={{background: "#f5f6fa"}}>


                {/*Open Button*/}
                <button className="nav-toggle-icon w3-xlarge w3-hide-large"
                        style={{display: !this.state.display ? "block" : "none"}} id={"open"}
                        onClick={() => {
                            this.setState({display: true})
                        }}>
                    <i className="fas fa-bars"></i>
                </button>

                {/*Sidebar*/}
                <div className={"w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left"}
                     style={{width: 350 + 'px', display: this.state.display ? "block" : "none"}}>

                    {/*Close Button*/}
                    <button className="nav-toggle-icon w3-xlarge w3-hide-large" id={"close"}
                            onClick={() => {
                                this.setState({display: false})
                            }}>
                        <i className="fas fa-times"></i>
                    </button>

                    {/*Search box*/}
                    <div className={"nav-search-box"}>
                        <input className={"nav-search-text"}/>
                        <span className={"nav-search-icon"}>
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                    <div className={"forum-list"}>
                        <ul className="w3-ul">
                            <li>Forum</li>
                            <li>Forum</li>
                            <li>Forum</li>
                            <li>Forum</li>
                            <li>Forum</li>
                            <li>Forum</li>
                            <li>Forum</li>
                            <li>Forum</li>
                            <li >Ahoj mami</li>

                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Navigation;
