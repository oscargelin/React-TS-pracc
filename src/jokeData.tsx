type Joked = {
  id: number;
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
  id: 1,
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
const jokeTwo: Joked = {
  id: 2,
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
const jokeThree: Joked = {
  id: 3,
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
const jokeFour: Joked = {
  id: 4,
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
const jokeFive: Joked = {
  id: 5,
  setup: "setup",
  punchline: "punchline",
  upVotes: 5,
  downVotes: 6,
  writer: { name: "writerName", age: 55 },
};
export default [jokeOne, jokeThree, jokeTwo, jokeFour, jokeFive];
