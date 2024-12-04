import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-900 to-gray-800 min-h-screen flex flex-col">
      {/* Sección principal - Bienvenida y descripción de la Floristería */}
      <div className="container max-w-full mx-auto py-24 px-6 flex-grow">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a TechR&A: Innovación al alcance de tus manos</h1>
          <p className="text-xl mb-8">
          Explora nuestra amplia gama de productos tecnológicos diseñados para transformar tu vida. Desde dispositivos
           inteligentes hasta los gadgets más innovadores, todo en un solo lugar.
          </p>
          <h1 className="text-4xl font-bold mb-4 text-red-500">Productos</h1>

        </div>

        {/* Galería de imágenes de productos */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Producto 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/Tecnologia.jpg"
              alt="Ramo de Rosas"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-medium text-xl text-white">Articulos</h3>
             
             
            </div>
          </div>

          {/* Producto 2 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/varios.png"
              alt="Laptops"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-medium text-xl text-white">Laptops</h3>
            
            </div>
          </div>

          {/* Producto 3 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/reloj.jpg"
              alt="Ramo de Lirios"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-medium text-xl text-white">Smartwatch FitLife 3</h3>
            
            </div>
          </div>

           {/* Producto 4 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/rojo.jpg"
              alt="Ramo de Lirios"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-medium text-xl text-white">Otros</h3>
            
            </div>
          </div>
            </div>
          </div>

        
      

      {/* Sección de Suscripción */}
      <div className="w-full bg-indigo-800 text-white py-4">
        <div className="flex flex-col md:flex-row justify-between items-center p-6">
          <div className="m-auto text-center">
            <p>Recibe las últimas novedades sobre nuestras flores y ofertas exclusivas.</p>
            <h2 className="font-bold">Suscríbete a nuestro boletín</h2>
          </div>
          <div className="pt-2 flex justify-center gap-x-3">
            <a href="" className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80">
              <img
                src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
                alt="App Store"
                className="w-28 lg:w-36 xl:w-auto"
                width="209"
                height="60"
              />
            </a>

            <a href="" className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80">
              <img
                src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
                alt="Google Play"
                className="w-28 lg:w-36 xl:w-auto"
                width="209"
                height="60"
              />
            </a>
          </div>
        </div>

        <div className="w-full md:w-5/12 mx-auto">
          <form className="w-full" noValidate>
            <div className="flex flex-col items-center">
              <div className="w-full">
                <input
                  id="subscription_email"
                  name="subscription_email"
                  type="email"
                  placeholder="Escribe tu correo aquí"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading md:h-12 px-4 lg:px-7 h-12 lg:h-14 text-center bg-white text-black"                   autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <button
                data-variant="flat"
                className="w-full bg-black transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-800 mt-2 flex-shrink-0"
              >
                <span className="lg:py-0.5">Suscribirse</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
