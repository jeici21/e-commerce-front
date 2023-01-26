import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavbarInfo from './components/NavbarInfo';
import NavbarMain from './components/NavbarMain';
import Search from './components/Search';
import Carousel from './components/Carousel';
import MonthCategories from './components/MonthCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavbarInfo />
      <NavbarMain />
      <Search />
      <Carousel />
      <MonthCategories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default App;
