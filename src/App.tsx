import React from 'react';
import './App.css';
import {Dialogs} from './components/dialogs/Dialogs';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: (postText:string) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrappers">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile postsData={props.state.profilePage.postsData} />} />
                    <Route path="/dialogs"
                           render={() => <Dialogs messagesData={props.state.messagePage.messagesData}
                                                                  dialogsData={props.state.messagePage.dialogsData}/>} />
                    {/*<Route path="/news" render={() => <Dialogs />} />*/}
                    {/*<Route path="/music" render={() => <Dialogs />} />*/}
                    {/*<Route path="/settings" render={() => <Dialogs />} />*/}
                </div>

            </div>

        </BrowserRouter>

    );
}


export default App;
