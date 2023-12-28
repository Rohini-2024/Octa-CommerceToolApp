import { Route, BrowserRouter as Router,Rute } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';

import Home from  './components/Pages/Home';
import Staff from './components/Pages/Staff';
import Navbar from './components/layout/Navbar'


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Route path="/" exact={true} component={Home}/>
        <Route path="/Staff" extact={true} component={Staff}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
