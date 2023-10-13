import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import React, { useEffect,useState } from 'react';
import LoadingSkeleton from './components/LoadingSkeleton';

function App() {
  const [show, setShow] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true); // State for tracking dark mode
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App overflow-hidden">
       {loading ? (
        
        <LoadingSkeleton />

      ) : (<>
       { // Render your actual website content when loading is complete
        /* Your website content goes here */}
     
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} show={show} setShow={setShow} />
      <div className='flex flex-col'>
        
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} setDarkMode={setDarkMode} />  
      <Skills darkMode={darkMode} setDarkMode={setDarkMode} />             
      <Projects darkMode={darkMode} setDarkMode={setDarkMode} />  
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />  
          
     
      </div>

      </> )}
    </div>
  );
}

export default App;
