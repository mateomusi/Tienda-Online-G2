// AddProductForm.js
import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productColors, setProductColors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas (puedes agregar más según tus necesidades)
    if (!productName || !productPrice || !productImage || !productColors) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Crear un objeto con la información del nuevo producto
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      image: productImage,
      colors: productColors,
    };

    // Llamar a la función proporcionada por el padre para agregar el nuevo producto
    onAddProduct(newProduct);

    // Limpiar los campos del formulario después de agregar el producto
    setProductName("");
    setProductPrice("");
    setProductImage("");
    setProductColors("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del Producto:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label>
        Precio del Producto:
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </label>
      <label>
        URL de la Imagen:
        <input
          type="text"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
      </label>
      <label>
        Colores Disponibles:
        <input
          type="text"
          value={productColors}
          onChange={(e) => setProductColors(e.target.value)}
        />
      </label>
      <button type="submit">Añadir Producto</button>
    </form>
  );
};

export default AddProductForm;
