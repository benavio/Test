import { messagesData } from "../Dialogs";
import classes from "../Dialogs.module.css";


export const Message = () => {

    let messagesElement = messagesData.map(m => <MessageItem message={m.message} id={m.id} />)

    return (
            <div className={classes.message}>
                <div className={classes.message}>
                    {messagesElement}
                </div>
            </div>
    )
};

type MessagePropsType = {
    message: string
    id: number
}
const MessageItem = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}