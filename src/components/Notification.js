import React from "react";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Notification = ({type,message}) => {

    const dispatch = useDispatch();

    const notification = useSelector(state => state.ui.notification);

    const handleClose = () => {
        dispatch(uiActions.shwNotification({
            open: false
        }))
    }
    
    return (
        <div>
            {notification.open && <Alert onClose={handleClose} severity={type}>{ message }</Alert>}
        </div>
    )
}

export default Notification;