import React, {useState} from 'react'

export default function TextForm(props) {
  //state
  const [text, setText] = useState('Enter Text Here');
  //  text => state variable, setText => fn used to Update text.
  // useState => default value(initialization) called Hooks in React.


  //other functions

  //handling event
  //FUN TO CONVERT => UPPERCASE
  const handleUpClick = () =>{
    //changing the state => after button click | (use this fun in btn)
    let newText = text.toUpperCase();
    setText(newText);
  }

  // FUN TO CONVERT TO LOWERCASE
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  // cap 1st letter
  const CamelCase = () => {
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      // capitalizes the first letter, and concatenates with the rest of the string.
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let newText = words.join(" ");
    setText(newText);
  }

  //for text clear
  const clearText = () => {
    setText("");
  }

  // Runs on change[input] - a text is entered by user
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  return (
    <>
    <div class="mb-3 container my-3">
        <h3>{props.heading}</h3>
        <div class="input-group">
            <textarea value={text} onChange={handleOnChange} class="form-control" aria-label="With textarea"></textarea>
        </div>
        <br />
        {/*         runs handleUpClick function on btn click */}
        <button onClick={handleUpClick} className = "btn btn-success mx-2 my-2">To UpperCase</button>
        <button onClick={handleLowClick} className = "btn btn-success mx-2 my-2">To LowerCase</button>
        <button onClick={CamelCase} className = "btn btn-success mx-2  my-2">Upper Camel Case</button>
        <button onClick={clearText} className = "btn btn-warning mx-2">Clear Text</button>
        <hr />
    </div>

    <div class="container my-4">
      <h4>Analysis of your Text</h4>
      {/* let wordCount = {} ; */}
      <b>
      <p>Words: {text.split(" ").length} | Characters: {text.length} | Sentenses: {text.split('.').length - 1}</p>
      <p>Reading Time: {0.008 * text.split(" ").length} Minutes.</p>
      </b>
    </div>

    </>
    
  )
}