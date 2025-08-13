import { motion } from "motion/react";



export default function CallToAction() {
  return (
    <motion.div className="py-8 px-4 mx-auto sm:py-16 lg:px-6 bg-purple-50" initial={{ opacity: 0, y: 50 }}   // Estado inicial (oculto)
      whileInView={{ opacity: 1, y: 0 }} // Se activa al ser visible
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }} // "once" para animar solo la primera vez
    >
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-3xl tracking-tight font-bold leading-tight text-purple-800">Compra ahora</h2>
        <p className="mb-6 text-purple-700 md:text-lg">Haz tu primera compra y obten un grandioso descuento</p>


        <a href="#"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-purple-500 ">
          Pedir
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  )
}