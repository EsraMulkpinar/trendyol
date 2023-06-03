import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryProduct from "./pages/CategoryProduct";
import MerchantProduct from "./pages/MerchantProduct";
import LoginPage from "./pages/LoginPage";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import RegisterPage from "./pages/RegisterPage";
import Products from "./pages/Products";
import BasketPage from "./pages/BasketPage";
import FavoritesPage from "./pages/FavoritesPage";
import PaymentPage from "./pages/PaymentPage";
function App() {
  return (
    <div className="App ">
      <Router>
        <div className="App">
          <header>
            <Header />
          </header>
          <Switch>
            <Route path="/category">
              <CategoryProduct />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/merchant/:id">
              <MerchantProduct />
            </Route>
            <Route path="/signin">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/basket">
              <BasketPage />
            </Route>
            <Route path="/favorites">
              <FavoritesPage />
            </Route>
            <Route path="/payment">
              <PaymentPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
