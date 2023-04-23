import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { incr, decr, addmas } from '../../app/counter/testSlice'
export const Test = () => {
    const count = useSelector(state => state.test.value)
    const mas=useSelector(state => state.test.mas)
    const dispatch = useDispatch()
    const newarray=mas.map((elem)=>
        <div>{elem}</div>)
    return(<>
     <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incr())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decr())}
        >
          Decrement
        </button>
      <br/>
      <button onClick={dispatch(addmas())}>AddELEM</button>
     {newarray}
      </div>
    </div>
    </>);
};
