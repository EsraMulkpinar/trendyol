import './App.css';
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import CategoryProduct from './pages/CategoryProduct';
import MerchantProduct from './pages/MerchantProduct';
function App() {
  return (
    <div className="App ">
     {/* <Header/>
     <HomePage/>
     <Footer/> */}
      <Router>
      <div>
        
        <Switch>
          <Route path="/category">
            <CategoryProduct />
          </Route>
          <Route path="/merchant/:id">
            <MerchantProduct />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
