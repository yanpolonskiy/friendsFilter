import React, { Component } from 'react';

export const FilterInput = (props) => {
    return (
        <input type="text"
            className="listFilter"
            onChange={props.onInput}
            placeholder="Введите описание">
        </input>
    );
}