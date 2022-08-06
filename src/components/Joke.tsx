import internal from "stream";
import style from "./Joke.module.scss";
interface Props {
  setup: string;
  punchline: string;
  upVotes: number;
  downVotes: number;
  writer: {
    name: string;
    age: number;
  };
}

const Joke = (props: Props) => {
  let heart: string = "<3";
  return (
    <div>
      <h2 className={style.h2}>{props.setup}</h2>
      <h3 className={style.h3}>{props.punchline}</h3>
      <h4 className={style.h4}>
        written by: {props.writer.name} {props.writer.age}
      </h4>
      <p className={style.p}>Upvotes: {props.upVotes}</p>
      <p className={style.lastElement}>Downvotes: {props.downVotes}</p>
    </div>
  );
};
export default Joke;
