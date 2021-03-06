import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Homepage from './Components/Home/Homepage';
import Nomination from './Components/Nomination/Nomination';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <Router>
    <div className="App">
      <Banner />
      <Nav />
    <Switch>
  <Route path= '/' exact component={Homepage} />
  <Route path='/Nomination' exact component ={Nomination} />
  </Switch>
    </div>
    </Router>
  );
}

export default App;
