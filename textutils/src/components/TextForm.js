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
    props.showAlert("Converted to UpperCase", "success");
  }

  // FUN TO CONVERT TO LOWERCASE
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
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
    props.showAlert("Converted to CamelCase", "success");
  }

  //for text clear
  const clearText = () => {
    setText("");
  }

  //copy to clipboard
  const copy=() => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard !", "success");
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
            <textarea value={text} onChange={handleOnChange} className="form-control" aria-label="With textarea" style={{backgroundColor: props.mode==='dark'?'#1E1E28':'white', color: props.mode==='dark'?'white':'black' }}></textarea>
        </div>
        <br />
        {/*       disabled if empty text    |   runs this function on btn click */}
        <button disabled={text.length === 0} onClick={handleUpClick} className = "btn btn-success mx-1 my-1">To UpperCase</button>
        <button disabled={text.length === 0} onClick={handleLowClick} className = "btn btn-success mx-1 my-1">To LowerCase</button>
        <button disabled={text.length === 0} onClick={CamelCase} className = "btn btn-success mx-1  my-1">Upper Camel Case</button>
        <button disabled={text.length === 0} onClick={copy} className = "btn btn-warning mx-1 my-1">Copy All</button>
        <button disabled={text.length === 0} onClick={clearText} className = "btn btn-warning mx-1 my-1">Clear Text</button>
        <hr />
    </div>

    <div className="container my-4">
      <h4>Analysis of your Text</h4>
      <b>
        {/* if no text written -> words=0; else words = no of spaces */}
                     {/* /\s+/ is for counting whitespaces => spaces and newLines */}
      <p>Words: {text.split(/\s+/).filter((element)=> {return element.length !==0}).length} | Characters: {text.length} | Sentenses: {text.split('. ').length - 1}</p>
      <p>Reading Time: {text.length===0?0: 0.008 * text.split(/\s+/).filter((element)=> {return element.length !==0}).length} Minutes.</p>
      </b>
    </div>

    </>
    
  )
}