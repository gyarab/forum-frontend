import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import configureStore from "./store";
import Navigation from "./components/Navigation";
import LilPost from "./components/LilPost"
import {BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <Router>
                    <div className="App">
                        <Navigation/>
                        <LilPost/>
                        <LilPost/>
                        <LilPost/>
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;
