import React from 'react';
import './App.css';
import {Dialogs} from './components/dialogs/Dialogs';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrappers">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={Dialogs}/>
                    <Route path="/music" component={Dialogs}/>
                    <Route path="/settings" component={Dialogs}/>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
