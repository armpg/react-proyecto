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
          Bienvenidos a TechR&A
          </h1>
        </div>

        <div className="flex flex-col text-center items-center mb-12">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          En TechR&A, nuestra misión es proporcionar a nuestros usuarios el mejor contenido relacionado con la tecnología informática. Desde las últimas novedades y tendencias hasta tutoriales detallados y análisis profundos, estamos aquí para ayudarte a navegar el emocionante mundo de la tecnología.
          </p>
 
          <div className="flex justify-center mt-10">
          <img
              src="/images/la.jpg"
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
                src="/images/tipo.png" 
                alt="Misión" 
                className="w-24 h-24 rounded-full mx-auto mb-4" 
              />
              <h2 className="text-lg font-medium text-white">Nuestra Mision</h2>
              <p className="text-base leading-relaxed mt-2 text-gray-300">
              Queremos que la información tecnológica sea accesible para todos, desde principiantes hasta expertos.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img 
                src="/images/ia.jpg"
                alt="Visión" 
                className="w-24 h-24 rounded-full mx-auto mb-4" 
              />
              
              <h2 className="text-lg font-medium text-white">Nuestra Vision</h2>
              <p className="text-base leading-relaxed mt-2 text-gray-300">
              <p>
          Nuestra Historia
          TechR&A nació de la pasión por la tecnología y el deseo de compartir conocimientos con la comunidad. Nuestro equipo está compuesto por profesionales con experiencia en diversas áreas del sector tecnológico, incluyendo desarrollo de software, redes, ciberseguridad y mucho más. Creemos que la tecnología tiene el poder de transformar vidas, y estamos dedicados a ser tu recurso confiable para mantenerse informado y aprender nuevas habilidades.
          </p>
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img 
                src="/images/tc.jpg"
                alt="Valores" 
                className="w-24 h-24 rounded-full mx-auto mb-4" 
              />
              <h2 className="text-lg font-medium text-white">Nuestros Valores</h2>
              <p className="text-base leading-relaxed mt-2 text-gray-300">
              Nos esforzamos por ofrecer contenido preciso, actualizado y de alta calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
