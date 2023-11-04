"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const RegistroForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    dpi: "",
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
    numeroTelefono: "",
    fechanacimiento: "",
    direccion: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        "La contraseña no cumple con el formato requerido.\n" +
          "Requisitos:" +
          "Debe contener al menos un dígito (0-9).\n" +
          "Debe contener al menos una letra (mayúscula o minúscula).\n" +
          "Debe contener al menos uno de los caracteres especiales: @, #, $, %, ^, &, +, =, !, * o _.\n" +
          "Puede contener letras mayúsculas, letras minúsculas, dígitos o cualquiera de los caracteres especiales mencionados.\n" +
          "Debe tener al menos 8 caracteres de longitud."
      );
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }
    try {
      const response = await fetch(
        // `http://localhost:3000/api/registro/${formData.dpi}`,
        `https://api-2-xgyd.onrender.com/api/registro/${formData.dpi}`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Documento insertado con éxito");
        router.replace("../");
        // Realiza alguna acción después de la inserción exitosa, si es necesario
      } else {
        console.error("Error al insertar documento");
        alert("Error al registrar. Por favor, inténtalo de nuevo.");
        // Maneja el error de inserción, si es necesario
      }
    } catch (error) {
      console.error("Error de red:", error);
      // Maneja errores de red, si es necesario
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-12 ">
      <div className="w-1/2 w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Formulario de Registro</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-medium">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="apellido"
              className="block text-gray-700 font-medium"
            >
              Apellido:
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="edad" className="block text-gray-700 font-medium">
              Edad:
            </label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-700 font-medium">
              Correo:
            </label>
            <input
              type="email"
              id="correo"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-700 font-medium">
              DPI:
            </label>
            <input
              type="text"
              id="dpi"
              name="dpi"
              value={formData.dpi}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-700 font-medium">
              Correo:
            </label>
            <input
              type="email"
              id="correo"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-700 font-medium">
              Numero Telefono:
            </label>
            <input
              type="text"
              id="numeroTelefono"
              name="numeroTelefono"
              value={formData.numeroTelefono}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-700 font-medium">
              Fecha de Nacimiento:
            </label>
            <input
              type="date"
              id="fechanacimiento"
              name="fechanacimiento"
              value={formData.fechanacimiento}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-700 font-medium">
              Contrasena:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium"
            >
              Confirmar Contraseña:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-700 font-medium">
              Direccion:
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4 ">
            <center>
              <button
                type="submit"
                className="w-1/4 bg-green-500 text-white font-medium py-2 rounded-md mr-6 hover:bg-green-600"
              >
                Registrar
              </button>
              <a
                type="submit"
                className="w-1/4 bg-rose-500 text-white font-medium py-2 rounded-md hover:bg-rose-600"
                href="../"
              >
                Regresar
              </a>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroForm;
