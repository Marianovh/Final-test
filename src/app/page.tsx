"use client";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { emit } from "process";

export default function Home() {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );

  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // console.log("email:" + formData.email + "     clave:" + formData.password);
    try {
      const response = await axios.post(
        "https://api-2-xgyd.onrender.com/api/login",
        // "http://localhost:3000/api/login",
        JSON.stringify(formData), // Convierte formData a JSON
        {
          headers: {
            "Content-Type": "application/json", // Establece el encabezado 'Content-Type' como 'application/json'
          },
        }
      );

      const newToken = response.data.token;
      localStorage.setItem("token", newToken);
      console.log("login key: " + localStorage.getItem("token"));
      setToken(newToken);
      localStorage.setItem("correo", formData.email);
      router.replace("./tienda");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      console.log(
        JSON.stringify(formData), // Convierte formData a JSON
        {
          headers: {
            "Content-Type": "application/json", // Establece el encabezado 'Content-Type' como 'application/json'
          },
        }
      );
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const checkTokenValidity = () => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // Realiza una solicitud al servidor para validar el token, si es necesario.
      // Puedes usar la misma ruta del servidor para validar el token.
      localStorage.setItem("correo", formData.email);
      // Si el token es válido, redirige al usuario a la página deseada.
      router.replace("./tienda");
    }
  };

  // Llama a la función de validación cuando la página se carga
  useEffect(() => {
    checkTokenValidity();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-100">
            Iniciar sesión
          </h2>
        </div>
        <form
          id="loginfrm"
          className="mt-8 space-y-6"
          onSubmit={handleFormSubmit}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Dirección de correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Dirección de correo electrónico"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Contraseña"
                onChange={handleInputChange}
                value={formData.password}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 
              px-4 border border-transparent text-sm font-medium rounded-md
               text-white bg-blue-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-white-500 group-hover:text-white-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Iniciar sesión
            </button>
            <div className="mt-5">
              <center>
                <a href="./register/">
                  <p className="text-center text-1xl font-extrabold hover:text-blue-300 text-blue-100">
                    ¿No tienes una cuenta?
                  </p>
                </a>
              </center>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
