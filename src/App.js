import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import configureStore from "./store";
// import Title from "./components/Title";
import Navigation from "./components/Navigation";

class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <div className="App">
                    <header className="App-header">
                        <Navigation/>
                    </header>

                </div>
            </Provider>
        );
    }
}


export default App;
