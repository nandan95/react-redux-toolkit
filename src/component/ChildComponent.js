import React from 'react'

const ChildComponent = ({ onClick, value }) => {
    console.log('ChildComponent rendered');
    return (
      <div>
        <button onClick={onClick}>Click me</button>
        <p>Value: {value}</p>
      </div>
    );
  };

export default ChildComponent
