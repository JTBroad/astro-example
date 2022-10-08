import React from 'react';

export const TestButton = (props) =>{
    return (
        <button className='btn btn-primary btn-sm' onClick={()=>{
            alert('HELLO THERE KENOBI')
        }}>
            {props.children}
        </button>
    );
}