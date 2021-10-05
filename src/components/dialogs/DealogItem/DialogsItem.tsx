import {NavLink} from 'react-router-dom';
import classes from "../Dialogs.module.css";
import {dialogsDataType} from "../../../redux/state";


type DialogPropsType = {
    dialogs: Array<dialogsDataType>
}

export const DialogsItem = (props: DialogPropsType) => {



    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)

    return (
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
    )
};

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
