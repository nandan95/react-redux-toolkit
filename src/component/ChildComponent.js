

import React, {  useMemo } from 'react';

// Function to simulate an expensive computation
const computeExpensiveValue = (num) => {
  console.log('Computing expensive value...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
};

const ChildComponent = ({ number }) => {
  // Memoize the result of the expensive computation
  const memoizedValue = useMemo(() => computeExpensiveValue(number), [number]);

  return (
    <div>
      <h2>Computed Value: {memoizedValue}</h2>
    </div>
  );
};

export default ChildComponent
