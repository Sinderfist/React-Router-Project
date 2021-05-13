import './App.css';
import Display from './Component/Display';
import MovieSearch from './Component/MovieSearch';
import MovieCard from './Component/MovieCard';
import NavBar from './Component/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path= '/' exact component={Home}/>
          <Route path='/Display/:movieStuff' exact component={Display} />
          <Route path='/MovieCard/' component={MovieCard} />
          <Route path='/MovieSearch' component={MovieSearch} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home</h1>

  </div>
)
export default App;
