import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number)=>void
}

export function Todolist(props: PropsType) {



    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks.map((tl) => {
                    const removeTasksButtonHandler = () =>{
                        props.removeTask(tl.id)
                    }
                        return (
                            <li key={tl.id}><input type="checkbox" checked={tl.isDone}/> <span>{tl.title}</span>
                                <button onClick={removeTasksButtonHandler}>x</button>
                            </li>
                        )
                    }
                )
            }
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
