import {NavLink} from 'react-router-dom';
import { dialogsData } from '../Dialogs';
import classes from "../Dialogs.module.css";


export const DialogsItem = () => {
    
    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />)

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
