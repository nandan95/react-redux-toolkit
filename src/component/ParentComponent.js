import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';
const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('Hello');
  
     // Memoize the handleClick function
//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//   }, []); 
  // Dependencies array is empty, so handleClick will be memoized once
// The ChildComponent will only re-render if its props change. Since handleClick is memoized and its dependencies array is empty, ChildComponent will not re-render when count changes, because the function reference does not change.


    // Memoize handleClick with dependencies
    const handleClick = useCallback(() => {
      console.log('Button clicked');
    }, [text]); // Function is recreated when `text` changes
//   When text changes, handleClick will be recreated, which will cause ChildComponent to re-render if value (which is text in this case) changes.
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setText(text === 'Hello' ? 'World' : 'Hello')}>
          Toggle Text
        </button>
        <ChildComponent onClick={handleClick} value={text} />
      </div>
    );
  };

export default ParentComponent
