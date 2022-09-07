import React from "react";
import { useLocation } from "wouter";

export default function Logo ({url}) {
    const pushLocation = useLocation()[1];
    const handleClick = evt => {
        pushLocation('/')
    }

    return (<img className="Logo-app" alt="logo-app" onClick={ handleClick } src={url} />)
}