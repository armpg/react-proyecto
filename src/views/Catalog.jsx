import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState({});
  const [showForm, setShowForm] = useState(false); // Estado para mostrar u ocultar el formulario
  const [newProduct, setNewProduct] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
  });

  // Llamada a la API
  useEffect(() => {
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

    fetchProducts();
  }, []);

  // Función para asignar imágenes según el id del producto
  const getProductImage = (id) => {
    const images = {
      1: '/images/planta1.jpg',
      2: '/images/planta2.jpg',
      3: '/images/planta3.png',
      4: '/images/planta4.jpg',
      5: '/images/planta5.jfif',
      6: '/images/planta6.jfif',
      7: '/images/planta7.jpg',
      8: '/images/planta8.jpeg',
      9: '/images/planta9.jfif',
      10: '/images/planta10.jpg',
      11: '/images/planta11.jfif',
      12: '/images/planta12.jpg'
    };
    return images[id] || '/images/default.jpg'; // Imagen por defecto si no hay coincidencia
  };

  // Límite de caracteres para la descripción
  const maxDescriptionLength = 100;

  const toggleShowMore = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Manejo del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí deberías ajustar la ruta de tu API para añadir productos
      await axios.post('http://localhost/products/api.php/productos', newProduct);
      alert('Producto registrado exitosamente');
      setNewProduct({ nombre: '', descripcion: '', precio: '' }); // Reinicia el formulario
      setShowForm(false); // Oculta el formulario
    } catch (error) {
      console.error('Error al registrar el producto:', error);
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

        {/* Formulario */}
        {showForm && (
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-medium title-font text-white mb-4">Registrar nuevo producto</h2>
            <form onSubmit={handleSubmit}>
              {/* Primera fila: Nombre y Precio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white mb-2">Nombre del producto</label>
                  <input
                    type="text"
                    name="nombre"
                    value={newProduct.nombre}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Precio</label>
                  <input
                    type="number"
                    name="precio"
                    value={newProduct.precio}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white rounded-lg p-2"
                    required
                  />
                </div>
              </div>
              {/* Segunda fila: Descripción */}
              <div className="mb-4">
                <label className="block text-white mb-2">Descripción</label>
                <textarea
                  name="descripcion"
                  value={newProduct.descripcion}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white rounded-lg p-2"
                  rows="3"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Registrar producto
              </button>
            </form>
          </div>
        )}

        {/* Catálogo de productos */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-6">
          {products.map((product) => (
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={product.id}>
              {/* Contenedor con posición relativa para colocar el ID */}
              <div className="relative rounded-lg h-64 overflow-hidden">
                {/* ID sobre la imagen */}
                <h3 className="absolute top-0 left-0 text-sm font-medium title-font text-white bg-black bg-opacity-50 p-1">
                  {product.id}
                </h3>
                {/* Imagen del producto */}
                <img
                  alt={product.nombre}
                  className="object-cover object-center h-full w-full"
                  src={product.image}
                />
              </div>
              {/* Nombre del producto */}
              <h2 className="text-xl font-medium title-font text-white mt-5">{product.nombre}</h2>
              {/* Descripción del producto */}
              <p className="text-base leading-relaxed mt-2">
                {showMore[product.id] || product.descripcion.length <= maxDescriptionLength
                  ? product.descripcion
                  : `${product.descripcion.substring(0, maxDescriptionLength)}...`}
              </p>
              {/* Botón "Leer más"/"Leer menos" */}
              {product.descripcion.length > maxDescriptionLength && (
                <button
                  onClick={() => toggleShowMore(product.id)}
                  className="text-indigo-400 inline-flex items-center mt-3"
                >
                  {showMore[product.id] ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              {/* Precio del producto */}
              <p className="text-lg text-yellow-500 mt-3">Precio: ${product.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
