interface Props {
  user: string;
}

const Body = (props: Props) => {
  return (
    <div>
      <h2>Welcome back {props.user}</h2>
    </div>
  );
};
export default Body;
