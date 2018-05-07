import React, {Component} from 'react';

export let taskMassive = [{
    description: "firstTask",
    addedDate: new Date(2012, 0, 1, 2, 3, 4, 567)
},
{
    description: "secondTask",
    addedDate: new Date(2011, 0, 1, 2, 3, 4, 567)
}
];

export const Task = ({description, date}) =>  
 (
            <li>
                <span className="description">{description}</span>
                <span className="addedDate">{date}</span>
                <Button>Удалить запись</Button>
            </li>
 )



 