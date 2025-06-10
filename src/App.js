import React, { useState } from 'react';
import { AddThoughtForm } from './addThoughtForm.js';
import { Thought } from './thoughts.js';
import { generateId, getNewExpirationTime } from './utilities.js';
import './App.css';

function App() {
  const [thoughts, setThoughts] = useState([//1
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);//2 pushes new thought into thought array in front
  };

  const removeThought = (thoughtIdToremove) => {
    setThoughts((thoughts) => thoughts.filter((thought) => thought.id !== thoughtIdToremove));//9 filters thought that is not thoughtId...
  };
  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}  /> {/*3*/}
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought removeThought={removeThought} key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
