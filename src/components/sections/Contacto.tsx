export default function Contacto() {
  return (
    <section className="text-gray-700 body-font bg-purple-50">
      <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section" id="contact-form">
        <div className="md:w-1/3 w-full">
          <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4 ">Contáctanos</h1>
          <p className="leading-relaxed text-lg text-gray-600">
            Estamos aquí para ayudarte! Si tienes alguna pregunta o necesitas asistencia, por favor no dudes en contactarnos.
            <br />
            <br />
            Puedes contactarnos por correo electrónico en
            <a href="mailto:contact@example.com" className="font-semibold border-b-2 border-purple-300 text-purple-500 hover:text-purple-700">
              contact@example.com
            </a>
          </p>
          <p className="leading-relaxed text-lg text-gray-600 mt-8">
            Conéctate con nosotros en las redes sociales:
          </p>
          <span className="inline-flex mt-6 justify-center sm:justify-start">
            <a className="text-purple-400 hover:text-purple-600 transition-colors" target="_blank" href="https://twitter.com/example">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-purple-400 hover:text-purple-600 transition-colors" href="https://www.instagram.com/example/" target="_blank">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
        <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
          <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Formulario de Contacto</h1>
          <form action="send-contact.php" method="post" id="submit-contact-form">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 py-2 text-sm text-gray-600 font-medium">Nombre</label>
                <input type="text" id="name" name="name" required
                  className="w-full bg-white rounded-lg border border-purple-200 focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 py-2 text-sm text-gray-600 font-medium">Correo Electrónico</label>
                <input type="email" id="email" name="email" required
                  className="w-full bg-white rounded-lg border border-purple-200 focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 py-2 text-sm text-gray-600 font-medium">Mensaje</label>
                <textarea id="message" name="message" required
                  className="w-full bg-white rounded-lg border border-purple-200 focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <button type="submit"
                className="flex text-white bg-purple-400 border-0 py-3 px-6 focus:outline-none hover:bg-purple-500 rounded-lg text-lg font-medium shadow-md hover:shadow-lg mx-0 flex-col text-center g-recaptcha transition-all duration-300">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}