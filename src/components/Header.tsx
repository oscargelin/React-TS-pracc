interface Props {
  user: string;
}

const Header = (props: Props) => {
  return (
    <div>
      <p>Current user: {props.user}</p>
    </div>
  );
};
export default Header;
