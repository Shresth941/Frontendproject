
import Header from './components/Header/Header';
import ProductCatalog from './pages/ProductCatalog';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header />
      <ProductCatalog />
      <Footer/>
    </div>
  );
};

export default App;
