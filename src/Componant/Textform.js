import React, { useState } from 'react'
export default function Textform(props) {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);


    function HandleUpClick() {
        // console.log("Upper Case was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.sowAlart("Converted to upper case","success")
    }

    function HandleLowClick(){
        let newText = text.toLowerCase()
        setText(newText)
        props.sowAlart("Converted to Lower case", "success")

    }
    function ClearClick(params) {
        setText("")
        props.sowAlart("Clear the text", "success")

    }
    function ExtraSpaceClick(params) {
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.sowAlart("Remove the extra spaces", "success")

    }
    function HandleOnchange(event) {
        // console.log("On Change")
        setText(event.target.value)
    }


    function CopyClick(params) {
        let t = document.getElementById("textBox")
        t.select();
        navigator.clipboard.writeText(t.value)
        props.sowAlart("Text copid", "success")
        document.getSelection().removeAllRanges();

    }

    const [text, setText] = useState('');
    // text="helkjfdlfkdfioekdf"//wrong way to change the state
    // setText("helkjfdlfkdfioekdf")//wrong way to change the state
    return (
        <>
            <div className='container'>
                <h1 style= {{color: props.textColor }}>{props.heading} </h1>
                <div className=" myBox mb-3 ">

                    <textarea className="form-control" value={text} style={{ backgroundColor: props.BgColor , color:  props.textColor  }} onChange={HandleOnchange} id="textBox" rows="10"    ></textarea>
                </div>
                <button className="btn btn-primary  mx-2 my-2" onClick={HandleUpClick} disabled={text.length===0}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={HandleLowClick} disabled={text.length===0}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={ClearClick} disabled={text.length===0}>Clear text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={CopyClick} disabled={text.length===0}>Copy the text</button>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={ExtraSpaceClick}>Remove Extra space</button>
            </div>
            <div className="container">
                <h2 className="heading" style={{color: props.textColor }}>Your Text Summary</h2>
                <p style={{ color: props.textColor }}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  words , {text.length} character</p>
                <p style={{ color: props.textColor }}>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                <h3 className="heading" style={{color: props.textColor }}>Preview</h3>
                <p style={{color: props.textColor }}>{text.length>0?text:"Write Something"}</p>
            </div>
        </>
    )
    
}
