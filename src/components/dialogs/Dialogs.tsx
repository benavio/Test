import React from 'react';
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DealogItem/DialogsItem";
import {Message} from "./Message/Message";
import {messagePageType} from "../../redux/state";


export const Dialogs = (props: messagePageType) => {
    return (<div className={classes.dialogs}>
            <DialogsItem dialogs={props.dialogsData}/>
            <Message messages={props.messagesData}/>
        </div>
    )
};

