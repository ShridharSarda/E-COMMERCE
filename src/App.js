import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import MainCarosel from './customer/components/HomeCarosel/MainCarosel';
import Homepage from './customer/pages/Homepage/Homepage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
function App() {
  return (
    <div className=" ">
      <Navigation/>
      <div>
        {/* <Homepage/> */}
        {/* <Product/> */}
        <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
}
 
export default App;

 