import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>  {/* jsx fragment */}
    
                  {/* passing props */}
    <Navbar text="Play with TEXT"/>
    <TextForm  heading = "Enter text to Operate"/>
    </>
  );
}

export default App;
