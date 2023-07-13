import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import { useState } from 'react';

function App() {

  const initProducts = [
    {
      id: 1,
      name: "Iphone 10 Pro Max",
      price: 1000,
      content: "This is description or content of this product, .....",
      status: "inActive"
    },
    {
      id: 2,
      name: "Iphone 11 Pro Max",
      price: 1200,
      content: "This is description or content of this product, .....",
      status: "active"
    },
    {
      id: 3,
      name: "Iphone 13 Pro Max",
      price: 1500,
      content: "This is description or content of this product, .....",
      status: "active"
    },
    {
      id: 4,
      name: "Iphone 14 Pro Max",
      price: 2000,
      content: "This is description or content of this product, .....",
      status: "new"
    }
  ]

  const [products, setProducts] = useState(initProducts);

  const addNewProduct = (product) => {
    setProducts([...products, product]);
  }

  return (
    <div className="App">
      <h1>Product Management</h1>
      <AddProductForm addNewProduct={addNewProduct} />
      <br />
      <ProductList products={products} />
    </div>
  );
}

export default App;
