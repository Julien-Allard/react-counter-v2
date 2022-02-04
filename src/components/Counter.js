const Counter = (props) => {
  return (
    <>
      {props.counter.map((elem, index) => {
        const counterPlus = () => {
          const newCounter = [...props.counter];
          newCounter[index] = elem + 1;
          props.setCounter(newCounter);
        };

        const counterMinus = () => {
          const newCounter = [...props.counter];
          newCounter[index] = elem - 1;
          props.setCounter(newCounter);
        };

        const resetCounter = () => {
          const newCounter = [...props.counter];
          newCounter[index] = 0;
          props.setCounter(newCounter);
        };

        return (
          <div key={index} className="full-counter">
            <div className="base-counter">
              {props.counter[index] > 0 && (
                <div onClick={counterMinus} className="minus">
                  -
                </div>
              )}
              <div className="counter">{elem}</div>
              {props.counter[index] < 10 && (
                <div onClick={counterPlus} className="plus">
                  +
                </div>
              )}
            </div>
            <button onClick={resetCounter} className="reset-btn">
              Reset
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Counter;
