
import './App.css';
import Auth from './component/Auth';
import Fullpage from './component/Fullpage';
import Main from './component/Main';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Fullpage/>}/>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
