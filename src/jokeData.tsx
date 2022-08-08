type Joked = {
  setup: string;
  punchline: string;
  upVotes: number;
  downVotes: number;
  writer: {
    name: string;
    age: number;
  };
};

const jokeOne: Joked = {
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
const jokeTwo: Joked = {
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
const jokeThree: Joked = {
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
const jokeFour: Joked = {
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
const jokeFive: Joked = {
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
export default [jokeOne, jokeThree, jokeTwo, jokeFour, jokeFive];
