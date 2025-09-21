
import './App.css';
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
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
