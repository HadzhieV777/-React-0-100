import React from "react";
import Joke from "./Joke";
import jokesData from "../jokesData";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <div>
      {jokeElements}
    </div>
  );
}

//  https://reactjs.org/docs/forms.html TO LEARN BEFORE WATCH COURSE 
//  07: 52: 17