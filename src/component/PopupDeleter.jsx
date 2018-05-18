import React, { Component } from 'react';

export const PopupDeleter = props => {
   confirm = () => {
    props.deleteTask();
    props.closePopup();
   }     
        return (
            <div className="pop-up-deleter">
            <span>Вы действительно хотите удалить запись?</span>
            <div className="buttons"><button onClick={confirm}>Да</button>
            <button onClick={props.negative}>Нет</button></div> 
            </div>
        )        
}