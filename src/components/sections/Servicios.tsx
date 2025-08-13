import { motion } from "framer-motion";

export default function Servicios() {
  return (
    <div className="px-5 py-16 mx-auto sm:px-8 md:px-12 lg:px-8 lg:py-20 max-w-7xl" id="services">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-purple-100 text-purple-800"
        >
          Nuestros servicios
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl"
        >
          <span className="relative inline-block">
            <span className="relative">Descubre las formas en que podemos ayudarte</span>
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-purple-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern id="pattern" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#pattern)" width="52" height="24"></rect>
            </svg>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 md:text-xl"
        >
          En Caro, nos enfocamos en brindarte la mejor experiencia de compra. Ofrecemos una amplia gama de productos de calidad, desde ropa hasta accesorios, todo diseñado para satisfacer tus necesidades y gustos.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
        <Servicio
          nombre="Servicio 1"
          descripcion="Descripción del servicio 1 que se adapta perfectamente a tus necesidades específicas."
          beneficios={["Beneficio exclusivo", "Resultados garantizados", "Soporte 24/7"]}
        />
        <Servicio
          nombre="Servicio 2"
          descripcion="Descripción del servicio 2 con características innovadoras y solución personalizada."
          beneficios={["Ahorro de tiempo", "Proceso simplificado", "Expertos certificados"]}
        />
        <Servicio
          nombre="Servicio 3"
          descripcion="Descripción del servicio 3 con enfoque premium y atención al detalle."
          beneficios={["Calidad premium", "Entrega express", "Satisfacción garantizada"]}
        />
      </div>
    </div>
  );
}

type Props = {
  nombre: string;
  descripcion: string;
  beneficios: string[];
};

function Servicio({ nombre, descripcion, beneficios }: Props) {
  return (
    <motion.div
      className="flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-start mb-4 space-x-4">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-purple-100 rounded-lg w-14 h-14">
          <svg className="w-8 h-8 text-purple-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{nombre}</h3>
          <p className="mt-1 text-gray-600">{descripcion}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-3">
        {beneficios.map((beneficio, index) => (
          <li key={index} className="flex items-start">
            <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2 text-gray-700">{beneficio}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}