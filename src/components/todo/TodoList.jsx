import React from 'react';

const TodoList = () => {
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
                         <tr>
                             <td>1</td>
                             <td></td>
                             <td>
                             <button className={"btn btn-dark"}>Edit</button>
                             </td>
                             <td>
                                 <button className={"btn btn-danger"}>Remove</button>
                             </td>
                         </tr>
                         </tbody>
                     </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;