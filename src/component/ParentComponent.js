import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);
  return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
        <button onClick={() => setNumber(number + 1)}>Change Number: {number}</button>
        <ChildComponent number={number} />
      </div>
    );
  };

export default ParentComponent
