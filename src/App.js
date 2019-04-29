import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter as Router} from 'react-router-dom';
import ForumRouter from "./components/ForumRouter";



class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <Router>
                    <div className="App">
                        <ForumRouter/>
                    </div>
                </Router>

            </Provider>
        );
    }
}


export default App;
