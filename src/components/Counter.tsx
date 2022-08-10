interface Props {
  counter: number;
}

const Counter = (props: Props) => {
  const incrementCounter = () => {
    props.counter = props.counter + 1;
  };

  const decrementCounter = () => {
    props.counter = props.counter + 1;
  };
  return (
    <div>
      <button onClick={incrementCounter}>+</button>
      <h1>{props.counter}</h1>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};
export default Counter;
