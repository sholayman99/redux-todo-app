import React from 'react';

const CreateTodo = () => {
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
               <div className={"col-md-10"}>
                   <input className={"form-control"} type={"text"} placeholder={"Create Task"}/>
               </div>
               <div className={"col-md-2"}>
                   <button className={"btn btn-primary"}>Add Todo</button>
               </div>
            </div>
        </div>
    );
};

export default CreateTodo;