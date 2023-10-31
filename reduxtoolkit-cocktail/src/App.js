import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./Components/PageNotFound";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}/>
        <Route path="/products/:pid" element={<ProductDetails></ProductDetails>}/>
        <Route path="*" element={<PageNotFound></PageNotFound>}/>
      </Routes>
      
    </>
  );
}

export default App;
