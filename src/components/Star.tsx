interface Props {
  isFilled: boolean;
  handleClick: () => void;
}

const Star = (props: Props) => {
  return (
    <div>
      <h2>{props.isFilled ? "Filled" : "Not filled"}</h2>
      <button onClick={props.handleClick}>press me</button>
    </div>
  );
};
export default Star;
