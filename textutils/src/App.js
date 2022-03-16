import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  //set Alerts via alert component
  const [alert, setAlert] = useState(null);

  //updates alert msg & type (for reusability)
  const showAlert= (message, type) => {
    setAlert({
      msg: message,
      alertType: type
    })

    //dismiss alert after few secs
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const [BtnText, setBtnText] = useState('Dark Mode Off');

  // we ll define mode within App.js
  const [mode, setmode] = useState('light');

  const ChangeMode = () => {
    if(mode==='light'){
      setmode('dark');
      setBtnText('Dark Mode On');
      document.body.style.backgroundColor = '#1E1E28';
      document.body.style.color = 'white';

      showAlert("Dark Mode Enabled", "success");
      //dynamic title : Used for alerts i.e in fb no of Unread msg
      document.title = 'PlayWithText - Dark Mode';
    }
    else{
      setmode('light');
      setBtnText('Dark Mode Off');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      showAlert("Dark Mode Disabled", "primary");
      document.title = 'PlayWithText - Light Mode';
    }
  }


  return (
    <>  {/* jsx fragment */}

    <Router>
                  {/* passing props */}
      <Navbar text="Play with TEXT" mode={mode} ChangeMode={ChangeMode} BtnText={BtnText} />

        <Routes>
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading = "Enter text to Operate" mode={mode} />}
              />

            <Route exact path="/about"
              element={<About mode={mode} />}
              />
        </Routes>

        <Alert alert={alert} />
    </Router>
    </>
  );
}

export default App;
