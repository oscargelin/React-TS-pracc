import style from "./Joke.module.scss";
interface Props {
  setup: string;
  punchline: string;
}

const Joke = (props: Props) => {
  let heart: string = "<3";
  return (
    <div>
      <h2 className={style.h2}>{props.setup}</h2>
      <h3 className={style.h3}>{props.punchline}</h3>
    </div>
  );
};
export default Joke;
