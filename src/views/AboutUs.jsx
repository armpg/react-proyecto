import React from 'react';

const AboutUs = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font">
            Sobre nosotros
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Tu floristeria favorita
          </h1>
        </div>

        <div className="flex flex-col text-center items-center mb-12">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            En "Floral Beauty", nos dedicamos a brindar las flores más hermosas para cada ocasión. 
            Con años de experiencia, nos esforzamos por crear los arreglos perfectos para brindar alegría y elegancia. 
            a tus momentos especiales. Desde bodas hasta eventos corporativos, ofrecemos una amplia variedad de productos frescos, 
            Flores cuidadosamente seleccionadas para hacer tu día aún más brillante. Nuestro objetivo es difundir felicidad con cada pétalo.
          </p>
          <div className="flex justify-center mt-10">
          <img
              src="/images/fondo.jpg"
              alt="Fondo floral"
              className="object-cover object-center max-w-md h-auto mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Sección con imágenes y texto */}
        <div className="flex flex-wrap justify-around items-center mt-16">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img 
                src="/images/mision.jpg" 
                alt="Misión" 
                className="w-24 h-24 rounded-full mx-auto mb-4" 
              />
              <h2 className="text-lg font-medium text-white">Nuestra Mision</h2>
              <p className="text-base leading-relaxed mt-2 text-gray-300">
                Ofrecer flores y arreglos de la más alta calidad, asegurando que cada ramo sea un 
                obra de arte. Nuestro objetivo es ofrecer belleza, frescura y una experiencia personalizada con cada pedido.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img 
                src="/images/vision.jpg"
                alt="Visión" 
                className="w-24 h-24 rounded-full mx-auto mb-4" 
              />
              <h2 className="text-lg font-medium text-white">Nuestra Vision</h2>
              <p className="text-base leading-relaxed mt-2 text-gray-300">
                Convertirnos en el proveedor floral líder en la comunidad, reconocido por su calidad excepcional, 
                creatividad y servicio al cliente. Queremos inspirar a la gente a celebrar la vida a través de las flores.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img 
                src="/images/valores.jpg"
                alt="Valores" 
                className="w-24 h-24 rounded-full mx-auto mb-4" 
              />
              <h2 className="text-lg font-medium text-white">Nuestros Valores</h2>
              <p className="text-base leading-relaxed mt-2 text-gray-300">
                La frescura, la creatividad y la sostenibilidad están en el centro de lo que hacemos. Priorizamos el uso 
                flores cultivadas localmente y prácticas ecológicas para aportar belleza a su vida y al medio ambiente.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl font-medium text-white mb-6">Nuestra colección de flores</h2>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="flower"
                  className="object-cover object-center h-64 w-full"
                  src="/images/rosas.jpg"
                />
              </div>
              <h3 className="text-xl font-medium title-font text-white mt-5">Rosas</h3>
              <p className="text-base leading-relaxed mt-2 text-gray-300">
                Hermosas rosas para cualquier ocasión, ofreciendo una gama de colores y variedades para expresar tus emociones.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="flower"
                  className="object-cover object-center h-64 w-full"
                  src="/images/lirios.jpg"
                />
              </div>
              <h3 className="text-xl font-medium title-font text-white mt-5">Lirios</h3>
              <p className="text-base leading-relaxed mt-2 text-gray-300">
                Lirios elegantes perfectos para bodas y eventos sofisticados, añadiendo gracia y belleza a cualquier entorno.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="flower"
                  className="object-cover object-center h-64 w-full"
                  src="/images/tulipanes.jpg"
                />
              </div>
              <h3 className="text-xl font-medium title-font text-white mt-5">Tulipanes</h3>
              <p className="text-base leading-relaxed mt-2 text-gray-300">
                Tulipanes brillantes y alegres que traerán la esencia de la primavera a tu hogar o evento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
