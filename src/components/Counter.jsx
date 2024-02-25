// eslint-disable-next-line no-unused-vars
import React from 'react';

const Counter = () => {
    return (
        <div className={"card"}>
           <div className={"card-header bg-dark"}>
               <h2 className={"text-white text-center py-2"}>My Counter App</h2>
           </div>
            <div className={"card-body"}>
               <h1>00</h1>
                <div className={"my-4"}>
                    <button className={"btn btn-success btn-lg ms-1"}>Increase</button>
                    <button className={"btn btn-danger btn-lg ms-1"}>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;