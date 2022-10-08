import { useState, useRef } from 'react';
import { makeAutoObservable } from "mobx";
import { observer } from 'mobx-react';


class CounterStore { 

    countValue = 0;

    constructor(){
        makeAutoObservable(this);
    }

    incrementCountValue = ()=>{
        this.countValue++;
    }
}

/**
 * Demo of creating a mobx store and seeing it update the page.
 */
export const DemoMobx = observer(()=>{

    const [counterStore]:[CounterStore:CounterStore] = useState(new CounterStore());

    return (
        <div className='flex items-center'>
            <button className='btn btn-primary btn-sm mr-4' onClick={counterStore.incrementCountValue}>Increment</button>
            <div className='font-bold text-xl'>{counterStore.countValue}</div>
        </div>
    )
})