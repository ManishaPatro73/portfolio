import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Home from '../src/components/Home';
import Education from '../src/components/Education';
import Experience from '../src/components/Experience';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import Contact from '../src/components/Contact';

function App() {
  return (
    <div className="App bg-primaryColor">
      <Header></Header>
      <Home></Home>
      {/* <Experience></Experience>
      <Education></Education>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact> */}
    </div>
  );
}

export default App;
