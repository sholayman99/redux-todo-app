import React from 'react';
import {useSelector} from "react-redux";

const TodoList = () => {

    const todos = useSelector((state)=>state.todo.value);

    return (
        <div className={"container-fluid my-3"}>
            <div className={"row"}>
                <div className={"col-md-12"}>
                     <table className={"table"}>
                         <thead>
                         <tr>
                             <th>No.</th>
                             <th>Task</th>
                             <th>Edit</th>
                             <th>Remove</th>
                         </tr>
                         </thead>
                         <tbody>
                         {
                             todos.map((item,i)=>{
                                 return (
                                     <tr key={i}>
                                         <td>{i+1}</td>
                                         <td>{item}</td>
                                         <td>
                                             <button className={"btn btn-dark"}>Edit</button>
                                         </td>
                                         <td>
                                             <button className={"btn btn-danger"}>Remove</button>
                                         </td>
                                     </tr>
                                 )
                             })
                         }
                         </tbody>
                     </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;