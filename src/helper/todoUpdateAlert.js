import Swal from "sweetalert2";
import store from "../redux/store/store.js";
import {editTodo} from "../redux/state/todo/todoSlice.js";


export function todoUpdateAlert(item,i){
    Swal.fire({
        title: "Update Task Name",
        input: "text",
        inputValue: item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(editTodo({index:i,task:value}))
            }
        }
    })
}