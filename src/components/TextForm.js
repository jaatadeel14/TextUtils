import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("upercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To uppercase!", "success");

    }
    const handleLoClick = () => {
        // console.log("upercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To lowercase!", "success");

    }



    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("speak was enable", "success");


    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    //   setText("new Text");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ background: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            </div>
            <div className="conatiner my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
            </div>

        </>
    )
}
