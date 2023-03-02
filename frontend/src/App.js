import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import ProductDetails from './components/product/ProductDetails';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<Temp />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

