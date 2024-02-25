// eslint-disable-next-line no-unused-vars
import React,{useRef} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {increment, decrement, setCustom} from "../redux/state/counter/counterSlice.js"

const Counter = () => {
    const custom = useRef();
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className={"card"}>
           <div className={"card-header bg-dark"}>
               <h2 className={"text-white text-center py-2"}>My Counter App</h2>
           </div>
            <div className={"card-body"}>
               <h1>{count}</h1>
                <div className={"my-4"}>
                    <button onClick={()=>{dispatch(increment())}} className={"btn btn-success btn-lg ms-1"}>Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className={"btn btn-danger btn-lg ms-1"}>Decrease</button>
                </div>
                <div className={"my-4"}>
                    <input ref={custom} className={"form-control ms-2 w-50"} type={"number"} />
                    <button onClick={()=>{dispatch(setCustom(custom.current.value))}} className={"btn btn-warning btn-lg ms-2 my-2 w-50"}>Set Custom</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;