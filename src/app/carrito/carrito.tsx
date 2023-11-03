import React, { Component } from "react";

interface CartItem {
  ID: number;
  nombre: string;
  marca: string;
  precio: number;
  descuento: number;
  preciodescuento: number;
  imagen: string;
  descripcion: string;
  cantidad: number;
}

interface CarritoProps {
  items: CartItem[];
  total: number;
  onRemoveFromCart: (item: CartItem) => void;
}

class Carrito extends Component<CarritoProps> {
  render() {
    const emailFromLocalStorage = localStorage.getItem("correo");
    const emailValue = emailFromLocalStorage || "";
    const { items, total, onRemoveFromCart } = this.props;

    const cartItems = items.map((item) => (
      <div key={item.ID} className="bg-white p-4 my-2 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <p>
            {item.nombre} - Q {item.preciodescuento} x {item.cantidad}
          </p>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
            onClick={() => onRemoveFromCart(item)}
          >
            Eliminar
          </button>
        </div>
      </div>
    ));

    return (
      <div className="cart">
        {cartItems}
        <div className="bg-white p-4 my-2 rounded-lg shadow-md">
          <p>Total: Q {total}</p>
        </div>
        <input type="hidden" name="email" value={emailValue} />
      </div>
    );
  }
}

export default Carrito;
