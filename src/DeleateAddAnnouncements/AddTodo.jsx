import React,{useContext, useState} from 'react';
import {TodoContex} from '../Provider/TodoContex';
import './TodoItem.scss';
import moment from "moment";
import {Link} from  'react-router-dom';

  const AddTodo=(props) => {
    const [todoValues,setTodoValues]=useState({
        title:"",
        description:"",
        id: null,
        date: moment().format("H:mm D.MM.yy")
    })
    const {
        onTodosCreate,
    }=useContext(TodoContex)
    const onTodoChange =({target:{name,value}})=>{
        
        setTodoValues({...todoValues,[name]:value})
    }
    const onCreate = ()=>{
        if(todoValues.title===""||todoValues.description==="")
        {
            console.error("Write something");
            return
        }
        else{
    onTodosCreate({...todoValues, id:Math.random()})
      
        
        setTodoValues({
            title:'',
        description:'',
        id:null,
        })
    }
    }
    return (
        <div>
          <form className='form'>
          <input className='input' value={todoValues.title} onChange={onTodoChange} type="text"  name="title" placeholder="Announcement title"></input> 
          <br/>
          <br/>
          <input className='input' value={todoValues.description} onChange={onTodoChange} type="text"  name="description" placeholder="Announcement description" ></input> 
          <br/>
          <br/>
        <button className='buttonInput' onClick={onCreate} ><Link className='LinkButton'  to="/list">Add Announcement</Link></button>
        </form>
        </div>
    );
}

export default AddTodo;