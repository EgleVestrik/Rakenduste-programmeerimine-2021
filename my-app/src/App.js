
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import AddItem from './pages/AddItem';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart' exact>
        <Cart />
      </Route>
      <Route path='/add-item' exact>
        <div>
          <AddItem />
        </div>
      </Route>
      
    </div>
  );
}

export default App;
