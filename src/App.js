import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import Gallery from './components/Gallery'
import Portfolio from './components/Portfolio'
import './App.css';

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About}/>
    <Route exact path="/Gallery" component={Gallery}/>
    <Route exact path="/portfolio" component={Portfolio}/>


    <Route component={NotFound} />


  </Switch>
</BrowserRouter>
);

export default App;
