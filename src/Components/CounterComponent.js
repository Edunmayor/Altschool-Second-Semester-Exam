// import React from 'react';
// import useCounter from './useCounter';
// import './CounterComponent.css'; // Import the CSS file

// function CounterComponent() {
//   const counter = useCounter(0);

//   return (
//     <div>
//       <h2>Counter Value: {counter.count}</h2>
//       <button onClick={counter.increment}>Increment</button>
//       <button onClick={counter.decrement}>Decrement</button>
//       <button onClick={counter.reset}>Reset</button>
//       <input
//         type="number"
//         value={counter.count}
//         onChange={(e) => counter.setValue(Number(e.target.value))}
//       />
//     </div>
//   );
// }

// export default CounterComponent;
import React from 'react';
import useCounter from './useCounter';
import './CounterComponent.css'; // Import the CSS file

function CounterComponent() {
  const counter = useCounter(0);

  return (
    <div className="counter-container">
      <h2 className="counter-value">Counter Value: {counter.count}</h2>
      <button className="counter-button" onClick={counter.increment}>
        Increment
      </button>
      <button className="counter-button" onClick={counter.decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={counter.reset}>
        Reset
      </button>
      <input
        type="number"
        value={counter.count}
        onChange={(e) => counter.setValue(Number(e.target.value))}
        className="counter-value"
      />
    </div>
  );
}

export default CounterComponent;

