import React,{useState} from 'react';
import {TodoContex} from './TodoContex';
function TodoContexProvider({children}) {
const[todos,SetTodos]=useState([]);
const onTodosCreate=(newTodo)=>{
    if(!newTodo){
        console.error("wrong arg")
        return;
    }
    SetTodos([...todos,newTodo])
    console.log(todos);

}
const onTodoRemove=(todoId)=>{
    if(!todoId){
        console.error('wrong id')
    }
    SetTodos(todos.filter(el=>el.id !==todoId))

}

    return (
        <div>
            <TodoContex.Provider value={{todos,onTodosCreate,onTodoRemove}}>
                {children}
            </TodoContex.Provider>
        </div>
    );
}

export default TodoContexProvider;