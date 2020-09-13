import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import icon from "./img/bp.png"


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img src={icon} className={s.icon} alt={''}/>
            <NavLink to={path} className={s.link}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem