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
      {/*      <Joke 
               setup="I told my wife she was drawing her eyebrows too high."
               punchline="She looked surprised."
                isPun={true}
               upvoters={10}
                downvoters={2}
                comments={[{author: '', body: '', title: ''}, {}]}/>
            <Joke 
                setup="My wife called me immature."
                punchline="I told her to get outta my fort."/>
            <Joke 
                 setup="Two cannibals are eating a clown."
                punchline="One looks at the other and asks, 'Does this taste funny to you?'"/>
            <Joke 
                setup="What did the elephant say to the naked man?"
                 punchline="How do you breathe through that [tiny thing]?"/>
           <Joke 
                setup="Two drums and a cymbal fall off a cliff..."
               punchline="Ba-dum tish!"/> */}
    </div>
  );
}
