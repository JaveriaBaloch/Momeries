import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar';
import Upload from './components/Uploads';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/uploads" element={<Upload/>}/>
      </Routes>
    </div>
  );
}

export default App;
