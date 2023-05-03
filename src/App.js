import './App.css';
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import Categories from './components/section/Categories';
import Merchants from './components/section/Merchants';
function App() {
  return (
    <div className="App ">
     <Header/>
     <Categories/>
     <Merchants/>
     <Footer/>
    </div>
  );
}

export default App;
