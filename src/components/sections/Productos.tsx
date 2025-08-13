import { BoxReveal } from "../magicui/box-reveal"
import { useState } from "react";
const productos = [
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    nombre: "Producto 1",
    descripcion: "Descripción del producto 1",
    precio: 100,
    categoria: "all",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    nombre: "Producto 2",
    descripcion: "Descripción del producto 2",
    precio: 200,
    categoria: "all",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    nombre: "Producto 3",
    descripcion: "Descripción del producto 3",
    precio: 300,
    categoria: "all",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    nombre: "Producto 4",
    descripcion: "Descripción del producto 4",
    precio: 400,
    categoria: "all",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    nombre: "Producto 5",
    descripcion: "Descripción del producto 5",
    precio: 500,
    categoria: "all",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    nombre: "Producto 6",
    descripcion: "Descripción del producto 6",
    precio: 600,
    categoria: "all",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    nombre: "Producto 7",
    descripcion: "Descripción del producto 7",
    precio: 700,
    categoria: "all",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    nombre: "Producto 8",
    descripcion: "Descripción del producto 8",
    precio: 800,
    categoria: "all",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    nombre: "Producto 9",
    descripcion: "Descripción del producto 9",
    categoria: "all",
    precio: 900,
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    nombre: "Producto 10",
    descripcion: "Descripción del producto 10",
    categoria: "all",
    precio: 1000,
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    nombre: "Producto 11",
    descripcion: "Descripción del producto 11",
    categoria: "all",
    precio: 1100,
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
    nombre: "Producto 12",
    descripcion: "Descripción del producto 12",
    categoria: "all",
    precio: 1200,
  },
]
function ProductItem({
  src,
  nombre,
  descripcion,
  precio,
}: {
  src: string;
  nombre: string;
  descripcion: string;
  precio: number;
}) {
  return (
    <div className="relative group">
      <img
        className="h-auto max-w-full rounded-lg transition-opacity duration-300 group-hover:opacity-75"
        src={src}
        alt="Producto 1"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h2 className="text-xl font-bold mb-2">{nombre}</h2>
        <p className="text-center">{descripcion} - {precio}</p>
      </div>
    </div>
  )
}
export default function Productos() {
  const [tipo, setTipo] = useState<string>("all");
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-6 my-24">
        <BoxReveal boxColor="rgb(139, 92, 246, 0.8)" duration={0.5}>
          <h2 className="text-4xl font-bold text-purple-500">Productos</h2>
        </BoxReveal>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button type="button" className="text-purple-700 border border-purple-600 bg-white hover:bg-purple-200 hover:text-purple-600 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" onClick={() => setTipo("all")}>All categories</button>
          <button type="button" className="text-gray-900 border border-white hover:border-purple-200 bg-white focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" onClick={() => setTipo("Hombre")}>Hombre</button>
          <button type="button" className="text-gray-900 border border-white hover:border-purple-200 bg-white focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" onClick={() => setTipo("Mujer")}>Mujer</button>
          <button type="button" className="text-gray-900 border border-white hover:border-purple-200 bg-white focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" onClick={() => setTipo("Niños")}>Niños</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {productos.filter((producto) => producto.categoria === tipo || tipo === "all").map((producto, index) => (
            <ProductItem key={index} src={producto.src} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} />
          ))}
        </div>
      </div>
    </section>
  );
}