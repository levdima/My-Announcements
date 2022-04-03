import React,{useContext} from 'react';
import {TodoContex} from '../Provider/TodoContex';
import TodoItem from './TodoItem';
import './ListTodo.scss'
export function ListTodo() {
    const {todos,onTodoRemove}=useContext(TodoContex)
    return (
        <div className='commonContainer'>
         {todos.map(el=><TodoItem
         onTodoRemove={onTodoRemove}

         key ={el.title+el.description} todo={el}/>)}
     
        </div>  
    );
}

export default ListTodo;