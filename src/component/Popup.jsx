import React, { Component } from 'react';

export const Popup = (props) => {
    let classNameContainer = props.isVisible ? "pop-up-container visible" : "pop-up-container";
    let classNamePopup = props.isVisible ? "pop-up visible" : "pop-up";
    return (
        <div className={classNameContainer}>
            <div className={classNamePopup}>
                {props.children[props.id]}
            </div>
        </div>
    );
}        
