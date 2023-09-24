import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {

    // function for UpperCase button
    const handleOnUpperButton = () => {
        let newUpperCaseText = text.toUpperCase();
        setText(newUpperCaseText);
        // props.showAlert("Converted to uppercase!", "success");
        
    }
    // function for enable input field
    const handleOnUpperChange = (event) => {
        setText(event.target.value);

        setInterval(() => {
            document.title = "Utilize Text";
        }, 4000);
    }
    // function for LowerCase button
    const handleOnLowerButton = () => {
      let newLowerCaseText = text.toLowerCase();
      setText(newLowerCaseText);
      // props.showAlert("Converted to lowercase!", "success");
    }
    // function for Clear all button
    const clearAllBtn = () => {
        setText("");
        // props.showAlert("Input field clear now!", "success");
    }
    // function for copy clipboard
    const handleForCopy = () => {
        let text = document.getElementById("TextArea");
        text.select();
        navigator.clipboard.writeText(text.value); 
        // props.showAlert("Copied text!", "success");
    }
    // function for remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showAlert("Extra spaces removed!", "success");
    }

    // for Toast, UpperCase
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');
    if (toastTrigger) {
        // eslint-disable-next-line no-undef
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show();
        });
    }

    // for Toast, LowerCase
    const toastTriggerForLower = document.getElementById('liveToastBtnForLower');
    const toastLiveExampleForLower = document.getElementById('liveToastForLower');
    if (toastTriggerForLower) {
      // eslint-disable-next-line no-undef
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExampleForLower);
      toastTriggerForLower.addEventListener('click', () => {
          toastBootstrap.show();
      });
    }

    // for Toast, Copy Text
    const toastTriggerForCopyText = document.getElementById('copyBtn');
    const toastLiveExampleForCopyText = document.getElementById('liveToastForCopyBtn');
    if (toastTriggerForCopyText) {
      // eslint-disable-next-line no-undef
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExampleForCopyText);
      toastTriggerForCopyText.addEventListener('click', () => {
          toastBootstrap.show();
      });
    }

    // for Toast, Removed extra spaces
    const toastTriggerForExtraSpaces = document.getElementById('extraSpacesBtn');
    const toastLiveExampleForExtraSpaces = document.getElementById('liveToastForExtraSpaces');
    if (toastTriggerForExtraSpaces) {
      // eslint-disable-next-line no-undef
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExampleForExtraSpaces);
      toastTriggerForExtraSpaces.addEventListener('click', () => {
          toastBootstrap.show();
      });
    }

    // for Toast, Clear All
    const toastTriggerForClearAll = document.getElementById('clearBtn');
    const toastLiveExampleForClearAll = document.getElementById('liveToastForClearAll');
    if (toastTriggerForClearAll) {
      // eslint-disable-next-line no-undef
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExampleForClearAll);
      toastTriggerForClearAll.addEventListener('click', () => {
          toastBootstrap.show();
      });
    }

    const [text, setText] = useState("");

  return (
    <>
    <div className='container'>
      <h3 className='mb-4'>{props.heading}</h3>
      <div className="input-group mb-3">
        <span className="input-group-text">{props.title}</span>
        <textarea className="form-control" id='TextArea' value={text} onChange={handleOnUpperChange} aria-label="With textarea"></textarea>
      </div>
      <div className="btn-group mt-2 col-md-12 text-center " role="group" aria-label="Buttons">
        <button type="button" className="btn btn-secondary" id='liveToastBtn' onClick={handleOnUpperButton}>UpperCase</button> &nbsp;
        <button type="button" className="btn btn-secondary" id='liveToastBtnForLower' onClick={handleOnLowerButton}>LowerCase</button> &nbsp;
        <button type="button" className="btn btn-secondary" id='copyBtn' onClick={handleForCopy}>Copy Text</button>
      </div>
      <div className="btn-group mt-2 col-md-12 text-center " role="group" aria-label="Buttons">
        <button type="button" className="btn btn-secondary" id='extraSpacesBtn' onClick={handleExtraSpaces}>Remove Extra Spaces</button> &nbsp;
        <button type="button" className="btn btn-outline-danger" id='clearBtn' onClick={clearAllBtn}>Clear Text</button>
      </div>
    </div>

    <div className="container my-4" id='summary'>
      <h3>Your text summary</h3>
      <p><b>{text.length > 0 ? text.split(" ").length : text.split(" ").length - 1}</b> words, <b>{text.length}</b> characters</p>
      <p><b>{(0.004 * text.length).toFixed(2)}</b> minutes read</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here!"}</p>
    </div>

    {/* Toast message for UpperCase*/}
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          {/* <img src="/public/logo192.png" className="rounded me-2" alt="logo" /> */}
          <strong className="me-auto">TextUtils</strong>
          <small>1 second ago</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body" style={{backgroundColor: props.mode==="dark" ? "white" : "white", color: props.mode==='dark' ? "black": "black"}}>Your text convert into uppercase.</div>
      </div>
    </div>

    {/* Toast message for LowerCase*/}
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToastForLower" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          {/* <img src="/public/logo192.png" className="rounded me-2" alt="logo" /> */}
          <strong className="me-auto">TextUtils</strong>
          <small>1 second ago</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body" style={{backgroundColor: props.mode==="dark" ? "white" : "white", color: props.mode==='dark' ? "black": "black"}}>Your text convert into lowercase.</div>
      </div>
    </div>

    {/* Toast message for Copy text*/}
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToastForCopyBtn" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          {/* <img src="/public/logo192.png" className="rounded me-2" alt="logo" /> */}
          <strong className="me-auto">TextUtils</strong>
          <small>1 second ago</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body" style={{backgroundColor: props.mode==="dark" ? "white" : "white", color: props.mode==='dark' ? "black": "black"}}>clipboard ready now, paste anywhere.</div>
      </div>
    </div>

    {/* Toast message for remove extra spaces*/}
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToastForExtraSpaces" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          {/* <img src="/public/logo192.png" className="rounded me-2" alt="logo" /> */}
          <strong className="me-auto">TextUtils</strong>
          <small>1 second ago</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body" style={{backgroundColor: props.mode==="dark" ? "white" : "white", color: props.mode==='dark' ? "black": "black"}}>Removed extra spaces from your text.</div>
      </div>
    </div>

    {/* Toast message for Clear all text*/}
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToastForClearAll" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          {/* <img src="/public/logo192.png" className="rounded me-2" alt="logo" /> */}
          <strong className="me-auto">TextUtils</strong>
          <small>1 second ago</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body" style={{backgroundColor: props.mode==="dark" ? "white" : "white", color: props.mode==='dark' ? "black": "black"}}>Clear input field, now add new text.</div>
      </div>
    </div>

    
    <div className='mb-5'></div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Enter the text to analyze below",
    title: "Your Text"
}