import React, { useState } from 'react';

export default function HelloWorld() {
  const [count, setCount] = useState(0);
  const clickAction = () => {
    setCount(count + 1);
  };

  return (
    <div className="m-4">
      <p className="text-xl">HelloWorld! {count}</p>
      <button
        className="m-2 rounded-md border-2 border-gray-500 p-2"
        onClick={clickAction}
      >
        count++
      </button>
    </div>
  );
}
