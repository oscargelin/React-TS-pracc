interface Props {
  name: string;
  age: number;
}
const Person = (props: Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
};
export default Person;
