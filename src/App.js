import React, { useState, useEffect } from "react";
import "./assets/styles/App.css";
import "./assets/styles/product.css";
import Product from "./components/product/Product";
import Header from "./components/common/header";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect is running!");

    // Agregar varios productos al inicio (puedes ajustar según tus necesidades)
    const initialProducts = [
      {
        id: 1,
        name: "Product 1",
        price: 99.99,
        image: "/images/product.jpg",
        colors: "Red",
      },
      {
        id: 2,
        name: "Product 2",
        price: 149.99,
        image: "/images/product.jpg",
        colors: "Blue",
      },
      // ... Agrega más productos según sea necesario
    ];

    // Agregar los productos iniciales al estado
    setProducts(initialProducts);

    // Limpia el timeout para evitar efectos secundarios al desmontar el componente
    return () => {
      // Hacer alguna limpieza si es necesario
    };
  }, []); // El segundo parámetro [] significa que se ejecutará solo en el montaje inicial

  const addProduct = (newProduct) => {
    // Verificar si el producto ya existe en la lista por su ID
    const productExists = products.some(
      (product) => product.id === newProduct.id
    );

    // Si no existe, agregar el producto
    if (!productExists) {
      // Agrega el nuevo producto a la lista
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  };

  const addToCartFunction = (productId) => {
    console.log(`Product ${productId} added to cart!`);
  };

  return (
    <div className="App">
      <Header />
      <div className="productos">
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            addToCart={addToCartFunction}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
