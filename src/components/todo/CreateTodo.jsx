import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/state/todo/todoSlice.js";

const CreateTodo = () => {

    const todoList = useRef();
    const dispatch = useDispatch();

    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
               <div className={"col-md-10"}>
                   <input ref={todoList} className={"form-control"} type={"text"} placeholder={"Create Task"}/>
               </div>
               <div className={"col-md-2"}>
                   <button onClick={()=>{dispatch(addTodo(todoList.current.value))}}
                           className={"btn btn-primary"}>Add Todo</button>
               </div>
            </div>
        </div>
    );
};

export default CreateTodo;