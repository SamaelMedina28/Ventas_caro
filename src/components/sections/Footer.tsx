
export default function Footer() {
  return (
    <div className="bg-purple-800">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-purple-50 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-purple-400 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-purple-200" href="#">Inicio</a>
            </li>
            <li className="my-2">
              <a className="hover:text-purple-200" href="#">Productos</a>
            </li>
            <li className="my-2">
              <a className="hover:text-purple-200" href="#">Servicios</a>
            </li>
            <li className="my-2">
              <a className="hover:text-purple-200" href="#">Preguntas</a>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-purple-400 mb-4">Ventas Caro</h3>
          <p className="text-purple-50 text-sm mb-10">Somos una tienda de ropa, calzado y joyería que ofrece una amplia gama de productos de calidad. Nuestra misión es brindarle a nuestros clientes la mejor experiencia de compra posible, con productos de alta calidad y precios competitivos.</p>
        </div>
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-purple-400 font-bold">Contacto</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-purple-400" href="tel:+6648371372">664 8371 372</a>
            </li>
            <li className="my-2">
              <a className="hover:text-purple-400" href="mailto:ventas.caro@gmail.com">ventas.caro@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 m-auto text-purple-50 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="my-5">© Copyright 2025. Todos los derechos reservados.</div>
      </div>
    </div>
  )
}