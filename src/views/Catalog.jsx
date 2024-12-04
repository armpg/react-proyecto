import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegisterProduct from '../components/RegisterProduct';
import ModalEditProduct from '../components/ModalEditProduct';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState({}); // Estado para mostrar más/menos texto
  const [showForm, setShowForm] = useState(false); // Para mostrar/ocultar el formulario
  const [productToEdit, setProductToEdit] = useState(null); // Producto seleccionado para editar

  // Llamada a la API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost/products/api.php/productos');
      const productsWithImages = response.data.map((product) => ({
        ...product,
        image: getProductImage(product.id), // Asignar imagen específica
      }));
      setProducts(productsWithImages);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Esta llamada solo se hace una vez cuando el componente se monta

  // Función para asignar imágenes según el id del producto
  const getProductImage = (id) => {
    const images = {
      1: '/images/1.jpg',
      2: '/images/2.jpg',
      3: '/images/3.jpg',
      4: '/images/4.jpeg',
      5: '/images/5.jpg',
      6: '/images/6.jpg',
      7: '/images/7.jpg',
      8: '/images/8.jpg',
      9: '/images/9.jpg',
      10: '/images/10.jpg',
      11: '/images/11.jpg',
      12: '/images/12.jpg',
      14:  '/images/14.jpg'
    };
    return images[id] || '/images/default.jpg'; // Imagen por defecto si no hay coincidencia
  };

  // Manejo de mostrar más texto
  const toggleShowMore = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Agregar un producto nuevo al catálogo
  const handleProductRegistered = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]); // Agrega el producto nuevo al final
  };

  // Actualizar un producto editado en el catálogo
  const handleProductUpdated = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  // Eliminar un producto
  const handleProductDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost/products/api.php/productos/${id}`);
        if (response.status === 200) {
          alert('Producto eliminado con éxito');
          // Eliminar el producto del estado después de la respuesta exitosa
          setProducts((prev) => prev.filter((product) => product.id !== id));
        } else {
          alert('Error al eliminar el producto');
        }
      } catch (error) {
        alert(`Error al eliminar el producto: ${error.message}`);
      }
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        {/* Botón para mostrar el formulario */}
        <div className="flex justify-end mb-6">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Ocultar formulario' : 'Registrar producto'}
          </button>
        </div>

        {/* Formulario de registro */}
        {showForm && (
          <RegisterProduct onProductRegistered={handleProductRegistered} />
        )}

        {/* Modal de edición */}
        {productToEdit && (
          <ModalEditProduct
            product={productToEdit}
            onClose={() => setProductToEdit(null)}
            onProductUpdated={handleProductUpdated} // Asegúrate de pasar esta función
          />
        )}

        {/* Catálogo de productos */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-6">
          {products.map((product) => (
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={product.id}>
              <div className="relative rounded-lg h-64 overflow-hidden">
                <h3 className="absolute top-0 left-0 text-sm font-medium title-font text-white bg-black bg-opacity-50 p-1">
                  {product.id}
                </h3>
                <img
                  alt={product.nombre}
                  className="object-cover object-center h-full w-full"
                  src={product.image}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">{product.nombre}</h2>
              {/* Descripción con el 'Leer más' */}
              <p className="text-base leading-relaxed mt-2">
                {showMore[product.id] || (product.descripcion && product.descripcion.length <= 100)
                  ? product.descripcion
                  : `${product.descripcion ? product.descripcion.substring(0, 100) : ''}...`}
              </p>
              {product.descripcion && product.descripcion.length > 100 && (
                <button
                  onClick={() => toggleShowMore(product.id)}
                  className="text-indigo-400 inline-flex items-center mt-3"
                >
                  {showMore[product.id] ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <p className="text-lg text-yellow-500 mt-3">Precio: ${product.precio}</p>

              {/* Botones de acción */}
              <div className="flex justify-center space-x-2 mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
                  onClick={() => setProductToEdit(product)} // Al hacer click se selecciona el producto a editar
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
                  onClick={() => handleProductDelete(product.id)} // Al hacer click se elimina el producto
                >
                  Eliminar
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-sm"
                  onClick={fetchProducts} // Botón para actualizar los productos
                >
                  Actualizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
