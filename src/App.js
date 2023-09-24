import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Service from './components/Service';

function App() {

  // for dark or light mode
  const [mode, setMode] = useState('info');

  const toggleMode = () => {
      if (mode === "info") {
          setMode("dark");
          document.body.style.backgroundColor = '#212540';
          document.body.style.color = 'white';
          // showAlert('Dark mode is enable', "success");
      } else {
          setMode("info");
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
          // showAlert("LIght mode is enable", "success");
      }
  }

  // for alert
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {

  //   if (document.getElementById("TextArea").value.length > 0) {
  //     setAlert({
  //         msg: message,
  //         type: type
  //     });
  //     setTimeout(() => {
  //         setAlert(null);
  //     }, 1500);
  //   }
  // }

  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert={alert} /> */}
      {/* <TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert} /> */}
      <div className='container my-4'>
          <TextForm heading='Enter the text to analyze below' mode={mode} />
          <About mode={mode} toggleMode={toggleMode} />
          <Service />
      </div>
    </>
  );
}

export default App;
