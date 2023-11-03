import React from "react";

interface ProductProps {
  ID: number;
  nombre: string;
  marca: string;
  precio: number;
  descuento: number;
  preciodescuento: number;
  imagen: string;
  descripcion: string;
  cantidad: number;
  onAddToCart: () => void;
}

function Productos(props: ProductProps) {
  return (
    <div className="w-full p-4">
      <div className="card rounded-lg items-center shadow-md">
        <center>
          {/* eslint-disable-next-line */}
          <img
            src={props.imagen}
            className="w-full h-48 object-cover"
            alt={props.nombre}
          />
        </center>
        <div className="p-4">
          <h5 className="text-lg font-semibold">{props.nombre}</h5>

          <h3 className="text-sky-400 font-bold">Q{props.preciodescuento}</h3>

          <button
            className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            onClick={props.onAddToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productos;
