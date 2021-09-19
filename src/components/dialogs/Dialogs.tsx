import React from 'react';
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DealogItem/DialogsItem";
import {Message} from "./Message/Message";


export const Dialogs = () => {
    return (<div className={classes.dialogs}>
            <DialogsItem />
            <Message />
        </div>
    )
};

export let dialogsData = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Nastya"}];
export let messagesData = [
    {id: 1, message: "hi"},
    {id: 2, message: "we"},
    {id: 3, message: "go"},
    {id: 4, message: "again"},
    {id: 5, message: "!!!!"},]