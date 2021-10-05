import classes from "../Dialogs.module.css";
import React from "react";


type MessageType = {
    message: string
    id: number
}
type MessagesPropsType = {
    messages: Array<MessageType>
}

export const Message = (props: MessagesPropsType) => {

    let messagesElement = props.messages.map(m => <MessageItem message={m.message} id={m.id} />)
    const addMessage = () => {
        alert(newPostElement.current?.value);
    }
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    return (
            <div className={classes.message}>
                <div className={classes.message}>
                    {messagesElement}
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
    )
};


const MessageItem = (props: MessageType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}