import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import {connect, Provider} from "react-redux";
import configureStore from "./store";
import Title from "./components/Title";

class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <div className="App">
                    <header className="App-header">
                        <Title ahoj={"jkvsvhsf"}/>
                    </header>

                </div>
            </Provider>
        );
    }
}


export default App;
