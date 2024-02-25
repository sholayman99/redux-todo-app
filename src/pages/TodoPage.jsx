import React from 'react';
import CreateTodo from "../components/todo/CreateTodo.jsx";
import TodoList from "../components/todo/TodoList.jsx";

const TodoPage = () => {
    return (
        <div className={"container-fluid my-5"}>
            <div className={"row"}>
                <div className={"col-12"}>
                    <div className={"card"}>
                        <div className={"card-header"}>
                           <h4 className={"fw-bold py-2"}>MY TODO APP</h4>
                        </div>
                        <div className={"card-body"}>
                            <CreateTodo />
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;