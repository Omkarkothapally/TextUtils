import React, { useState } from 'react'
 
export default function TextForm(props) {
  const handleUpClick =()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert(" Converted to UpperCase","success");
  }
  const handleloClick =()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert(" Converted to LowerCase","success");
  }
  const handleclearClick =()=>{
    let newtext='';
    setText(newtext);
    props.showAlert(" Text Cleared","success");
  }
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  const handleCopy =() =>{
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to Clipboard","success");
  }
  const handleExtraspaces =()=>{
    let newtext =text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert(" Removed Extra spaces","success");
  }


  const [text,setText] =useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className='form-control' value={text} onChange={handleOnChange} style={{background:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>Remove Extra spaces</button>
  </div>
  <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Text Summary</h2>
    <p>{text.split( /\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  

  )
}
