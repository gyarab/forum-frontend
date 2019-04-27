import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {BrowserRouter as Router} from 'react-router-dom';
import ForumRouter from "./components/ForumRouter";
import { PersistGate } from 'redux-persist/lib/integration/react';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<p >Ahoj</p>} persistor={persistor}>
                <Router>
                    <div className="App">
                        <ForumRouter/>
                    </div>
                </Router>
                </PersistGate>
            </Provider>
        );
    }
}


export default App;
