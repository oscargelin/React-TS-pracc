const Button = () => {
  const handleClick = () => console.log("clicked biatch");
  return (
    <div>
      <h1 onMouseOver={() => console.log("MOUSED")}>MOSEOVER THINGY</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default Button;
