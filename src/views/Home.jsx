import React from 'react';

const ProductCard = ({ image, altText, title, price }) => (
  <div className="rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={altText} className="w-full h-48 object-cover" />
    <div className="p-4 text-center">
      <h3 className="font-medium text-xl text-white">{title}</h3>
      <p className="text-gray-300">{price}</p>
    </div>
  </div>
);

const Home = () => {
  const products = [
    { image: '/images/Ramo1.jpg', alt: 'Ramo bouquet', title: 'Ramo Bouquet', price: 'Desde $25.99' },
    { image: '/images/Orquideas.jpg', alt: 'Orquídeas', title: 'Orquídeas', price: 'Desde $35.99' },
    { image: '/images/liriosramo.jpg', alt: 'Ramo de Lirios', title: 'Ramo de Lirios', price: 'Desde $22.99' },
    { image: '/images/ramotulipanes.jpeg', alt: 'Ramo de Tulipanes', title: 'Ramo de Tulipanes', price: 'Desde $30.99' },
    { image: '/images/arismetico.jpg', alt: 'Ramo Arismético', title: 'Ramo Arismético', price: 'Desde $20.00' },
    { image: '/images/buchon.jpg', alt: 'Ramo Buchón', title: 'Ramo Buchón', price: 'Desde $25.00' },
  ];

  return (
    <div className="bg-gradient-to-r from-green-900 to-gray-800 min-h-screen flex flex-col">
      <div className="container max-w-full mx-auto py-24 px-6 flex-grow">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Bienvenidos a Nuestra Floristería</h1>
          <p className="text-xl mb-8">
            Judith (the funniest programmer 🙌🏻​😝​) Encuentra las flores más hermosas y frescas para cualquier ocasión. Desde
            ramos de rosas hasta decoraciones personalizadas para eventos, tenemos todo lo que necesitas para alegrar tu día.
          </p>
          <button
            className="text-lg font-semibold bg-pink-600 hover:bg-pink-800 text-white rounded-lg px-6 py-3"
            onClick={() => alert('Explora nuestros productos')}
          >
            Explorar Productos
          </button>
        </div>

        {/* Galería de productos */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              altText={product.alt}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>

      {/* Sección de suscripción */}
      <div className="w-full bg-indigo-800 text-white py-8">
        <div className="flex flex-col md:flex-row justify-between items-center p-6">
          <div className="text-center mb-4 md:mb-0">
            <p>Recibe las últimas novedades sobre nuestras flores y ofertas exclusivas.</p>
            <h2 className="font-bold text-lg">Suscríbete a nuestro boletín</h2>
          </div>
          <form className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Escribe tu correo aquí"
              className="py-2 px-4 rounded-md text-black"
            />
            <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

