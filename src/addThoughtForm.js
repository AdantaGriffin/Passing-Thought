import React, { useState } from 'react'; //4
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {

  const [text, setText] = useState('');//4

  const handleTextChange = (event) => {//4
    setText(event.target.value); //5 
  };

  const handleSubmit = (event) => {

    event.preventDefault();//5 This prevents the browser from performing its default behavior when a form is submitted.

    const thought = {//6
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    };
    if(text.length){
      props.addThought(thought);//8checks if thought is truthy, if so it add to front of thoughts array created in app.js
    }
    setText(''); //7 after thought is pushed, input for new thoughts is cleared
  };
  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        onChange={handleTextChange}
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
