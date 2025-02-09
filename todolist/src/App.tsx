import React from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { title } from 'process';

export type TasksType = {
    id:number
    title:string
    isDone:boolean
}

export function App() {

let tasks:TasksType[] = [
    {
        id:1,
        title:"Пушкин",
        isDone:false
    },
    {
        id:2,
        title:"Толстой",
        isDone:false
    },
    {
        id:3,
        title:"Гоголь",
        isDone:true
    }
]


    return (

        <div className="App">
            <TodoList title={"Книги"} tasks={tasks}/>
            {/* <TodoList title={'Музыка'} />
            <TodoList title={'Кино'} /> */}
        </div>

    )
}




