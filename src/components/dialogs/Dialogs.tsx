import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from "./Dialogs.module.css";


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Nastya"}]
    let messagesData = [
        {id: 1, message: "hi"},
        {id: 2, message: "we"},
        {id: 3, message: "go"},
        {id: 4, message: "again"},
        {id: 5, message: "!!!!"},]

    let dialogsElements = dialogsData
        .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name="Dima" id={2}/>*/}
                {/*<DialogItem name="Sveta" id={3}/>*/}
                {/*<DialogItem name="Sasha" id={4}/>*/}
                {/*<DialogItem name="Nastya" id={5}/>*/}
                <dialogsElements />
            </div>
            <div className={classes.message}>
                <div className={classes.message}>
                    <MessageItem message={messagesData[0].message}/>
                    <MessageItem message={messagesData[1].message}/>
                    <MessageItem message={messagesData[2].message}/>
                    <MessageItem message={messagesData[3].message}/>
                    <MessageItem message={messagesData[4].message}/>
                </div>
            </div>
        </div>
    )
};

type MessagePropsType = {
    message: string
}
const MessageItem = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )

}

type DialogsPropsType = {
    name: string
    id: number
};
const DialogItem = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};
