// components/contact/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font">
            GET IN TOUCH
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Contact Us
          </h1>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form name="contact" method="POST" className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <input
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full"
                name="message"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center mt-12">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M13.5 3h3c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5zm-7.5 0h3c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5zm6 7h-6v6h6v-6z"/>
            </svg>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M23 3a10.21 10.21 0 0 1-2.92.81A4.93 4.93 0 0 0 22.46 2a9.95 9.95 0 0 1-3.16 1.21A4.92 4.92 0 0 0 16.61 0c-2.72 0-4.92 2.2-4.92 4.92 0 .39.05.77.14 1.13-4.09-.21-7.72-2.16-10.16-5.14A4.93 4.93 0 0 0 2.75 4.48a4.92 4.92 0 0 0-.66 2.47c0 1.7.87 3.2 2.19 4.08A4.91 4.91 0 0 1 .97 9.52v.06c0 2.38 1.69 4.38 3.94 4.83a4.88 4.88 0 0 1-2.22.08c.63 1.96 2.44 3.38 4.59 3.42A9.89 9.89 0 0 1 0 19.54a13.91 13.91 0 0 0 7.57 2.22c9.07 0 14.04-7.52 14.04-14.04 0-.21 0-.42-.02-.63A10.16 10.16 0 0 0 23 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
