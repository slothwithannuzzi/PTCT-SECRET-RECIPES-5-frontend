import axios from "axios";
import React, { useState } from "react";

export default function EditMenu(props) {
    
    const { food, edit, toggleEdit } = props;
    
    const handleChange = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCancel = () => {
        toggleEdit(false)
    }
    return (
        <div>
            testing the toggle:
            <button onClick = {handleCancel}>Cancel</button>
        </div>
    )
}