import React, { useContext,useCallback,useState } from 'react';
import './TodoItem.scss';
import DetailsModal from './DetailsModal';
export function TodoItem({todo,onTodoRemove}) {
    const [title, setText] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [isEdit, setIsEdit] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const onTodoDelete=()=>{
            onTodoRemove(todo.id)
        
    }
    const titleChangeHandler = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const descriptionChangeHandler = useCallback((e) => {
    setDescription(e.target.value);
  }, []);
  const clickHandler = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);
  
    return (
        <>
        <div>
      {isEdit ? (
        <><input value={title} onChange={titleChangeHandler} /><input value={description} onChange={descriptionChangeHandler} /></>
      ) : (
        <>
        <p className='text'>{title}</p>
        <div  className='textconteiner'>
        <p className='text'>{description}</p></div></>
      )} 
      <button className='button' onClick={onTodoDelete}>delete</button>
      <button className='button'  onClick={clickHandler}>
        {isEdit ? "Done" : "Edit"}
      </button>  
      <button className='button' onClick={() => {
          setModalOpen(true);
        }}>details</button>  
      </div>
      {modalOpen&&<DetailsModal title={title} description={description} setModalOpen={setModalOpen} onClose={() => setModalOpen(false)} todo={todo}/>}
      </>
 
    );
}

export default TodoItem;