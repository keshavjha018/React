import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'

function App() {
  const [BtnText, setBtnText] = useState('Dark Mode Off');

  // we ll define mode within App.js
  const [mode, setmode] = useState('light');

  const ChangeMode = () => {
    if(mode==='light'){
      setmode('dark');
      setBtnText('Dark Mode On');
      document.body.style.backgroundColor = '#1E1E28';
      document.body.style.color = 'white';
    }
    else{
      setmode('light');
      setBtnText('Dark Mode Off');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }


  return (
    <>  {/* jsx fragment */}

                  {/* passing props */}
    <Navbar text="Play with TEXT" mode={mode} ChangeMode={ChangeMode} BtnText={BtnText} />
    <TextForm  heading = "Enter text to Operate" mode={mode} />
    <About mode={mode} />
    </>
  );
}

export default App;
