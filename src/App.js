import './App.css';
import Display from './Component/Display';
import MovieSearch from './Component/MovieSearch';
import MovieCard from './Component/MovieCard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/Display' exact component={Display} />
          <Route path='/MovieCard' component={MovieCard} />
          <Route path='/MovieSearch' component={MovieSearch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
