import React, {useState} from  'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const [Text, setText] = useState('Enter text'); //'enter text'=value of text and settext is values after updation.
  const ConvertToUp =()=>{
    console.log("clicked");
   let newText= Text.toUpperCase();
   setText(newText);
   props.showalert("Converted!","success")
    
  }
const change =(event)=>{
  console.log("onchange");
  setText(event.target.value);
}
let click1=()=>{
  setText('');
}
const ConvertTolo=()=>{
  setText(Text.toLowerCase());
  props.showalert("Converted!","success")
}
function Clear(){
setText('');
props.showalert("Cleared!","success")
}
const speak=()=>{
  var msg = new SpeechSynthesisUtterance();
msg.text = Text;
window.speechSynthesis.speak(msg);
}
const copy=()=>{
 let copyText= document.getElementById("myBox")
  copyText.select();
  copyText.setSelectionRange(0,99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}
  return (<>
    
    <div className='textform'>
        <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" style={props.mode==='dark'? {backgroundColor:'grey', color:'white',}:{backgroundColor:'white', color:'black'}} value={Text} onClick={click1} onChange={change} id="myBox" rows="8"></textarea>
</div> 
<button type="button" className="btn btn-primary mx-2" onClick={ConvertToUp}>Click to convert</button>
<button type="button" className="btn btn-primary mx-2" onClick={ConvertTolo}>Click to convert</button>
<button type="button" className="btn btn-primary mx-2" onClick={Clear}>Clear</button>
<button type="button" className="btn btn-primary mx-2" onClick={speak}>Speak</button>
<button type="button" className="btn btn-primary mx-2" onClick={copy}>Copy</button>
<div className="container">
  <p className='mb-8'>{Text.split(' ').length} words and {Text.length} characters have been used and it takes {(1/125)*Text.split(' ').length}minute/s to read this.</p>
  <h2>Preview</h2>
  <p>{Text}</p>
</div>

                 
    </div>
    </>
  )
}
Textform.propTypes = {
    heading: PropTypes.string.isRequired,
}
