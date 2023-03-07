import React from "react";

function ActivitiesList() {
    const task = [{
        name: 'React',
        time: '02:00:00'
    },{
        name: 'JavaScript',
        time: '01:00:00'
    },{
        name: 'TypeScript',
        time: '01:30:00'
    }]
    return (
        <aside>
            <h2> Estudos do Dia </h2>
            <ul>
                {task.map((task, index) => (
                    <li key={index}>
                        <h3>{task.name}</h3>
                        <span>{task.time}</span>
                    </li>    
                ))}
            </ul>
        </aside>
    )
}

export default ActivitiesList;