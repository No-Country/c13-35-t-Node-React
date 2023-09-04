"use client";

import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact(): JSX.Element {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      asunto: "",
      message: "",
    },
  });

  const sendEmail = () => {
    if (form.current){
    emailjs
      .sendForm(
        "service_2w4po7s",
        "template_bmj9yw1",
        form.current,
        "ZNatgk5c_gNL_YC0o"
      )
      .then((result) => {
        console.log(result.text);
        setIsPopupVisible(true); 
        setTimeout(() => {
          setIsPopupVisible(false); 
          window.location.reload(); 
        }, 3000); 
      })
      .catch((error) => {
        console.log(error.text);
      });
    }
  };

  const onSubmit = () => {
    sendEmail();
    console.log();
  };

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phonePattern = /^[0-9]*$/;
  const subjectPattern = /^[A-Za-zÁÉÍÓÚáéíóúÄËÏÖÜäëïöü\s\-\(\)!\?]{3,100}$/;
  const messagePattern =
    /^[a-zA-Z0-9!#$%&()*+\-\/?,.@[\]^_{}|¡¿áéíóúüÁÉÍÓÚÜ\s,]*$/;

  return (
    <div
      className="flex items-center justify-start min-h-screen pl-32"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/701773/pexels-photo-701773.jpeg')`,
        backgroundSize: "cover",
      }}
    >
      <div
        className=" p-8 shadow-md rounded-md max-w-md w-full"
        style={{
          width: "506px",
          minHeight: "866.2px",
        }}
      >
        <h1
          className="text-2xl font-semibold mb-4"
          style={{
            fontFamily: "'Inria Sans', sans-serif",
            color: "#444B59",
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.55)",
          }}
        >
          CONTACTO
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} ref={form} className="field">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block mb-2 font-medium"
              style={{
                color: "#444B59",
                fontFamily: "'Inria Sans', sans-serif",
                fontWeight: "bold",
              }}
            >
              Nombre/s *
            </label>
            <input
              type="text"
              id="nombre"
              
              {...register("nombre", {
                required: true,
                minLength: 3,
                maxLength: 30,
                pattern: /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s\-']+$/,
              })}
              className={`w-full border rounded-md p-2 ${
                errors.nombre ? "border-red-500" : ""
              }`}
            />
            {errors.nombre?.type === "required" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                Falta completar con el nombre y el apellido
              </p>
            )}
            {errors.nombre?.type === "minLength" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El campo nombre debe tener al menos 3 caracteres
              </p>
            )}
            {errors.nombre?.type === "maxLength" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El campo nombre debe tener menos de 30 caracteres
              </p>
            )}
            {errors.nombre?.type === "pattern" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El nombre es incorrecto. Por favor, reingréselo.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="apellidos"
              className="block mb-2 font-medium"
              style={{
                color: "#444B59",
                fontFamily: "'Inria Sans', sans-serif",
                fontWeight: "bold",
              }}
            >
              Apellido/s
            </label>
            <input
              type="text"
              id="apellidos"
              
              {...register("apellidos", {
                required: false,
                minLength: 3,
                maxLength: 30,
                pattern: /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s\-']+$/,
              })}
              className={`w-full border rounded-md p-2 ${
                errors.apellidos ? "border-red-500" : ""
              }`}
            />

            {errors.apellidos?.type === "minLength" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El campo apellidos debe tener al menos 3 caracteres
              </p>
            )}
            {errors.apellidos?.type === "maxLength" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El campo apellidos debe tener menos de 30 caracteres
              </p>
            )}
            {errors.apellidos?.type === "pattern" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                Los apellidos son incorrectos. Por favor, reingréselos.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-medium"
              style={{
                color: "#444B59",
                fontFamily: "'Inria Sans', sans-serif",
                fontWeight: "bold",
              }}
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              
              {...register("email", {
                required: true,
                pattern: emailPattern,
              })}
              className={`w-full border rounded-md p-2 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                Falta completar el mail
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El mail es incorrecto. Por favor, reingréselo siguiendo el
                formato mail@proveedor.xxx
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="telefono"
              className="block mb-2 font-medium"
              style={{
                color: "#444B59",
                fontFamily: "'Inria Sans', sans-serif",
                fontWeight: "bold",
              }}
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              
              {...register("telefono", {
                required: false,
                pattern: phonePattern,
              })}
              inputMode="numeric"
              className={`w-full border rounded-md p-2 ${
                errors.telefono ? "border-red-500" : ""
              }`}
            />

            {errors.telefono?.type === "required" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                Falta completar el teléfono
              </p>
            )}
            {errors.telefono?.type === "pattern" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El teléfono debe contener solo números
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block mb-2 font-medium"
              style={{
                color: "#444B59",
                fontFamily: "'Inria Sans', sans-serif",
                fontWeight: "bold",
              }}
            >
              Asunto *
            </label>
            <input
              type="text"
              id="asunto"
              
              {...register("asunto", {
                required: true,
                pattern: subjectPattern,
              })}
              className={`w-full border rounded-md p-2 ${
                errors.asunto ? "border-red-500" : ""
              }`}
            />
            {errors.asunto?.type === "required" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                Falta completar el asunto
              </p>
            )}
            {errors.asunto?.type === "pattern" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El asunto debe cumplir con los requisitos de formato
                establecidos
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-medium"
              style={{
                color: "#444B59",
                fontFamily: "'Inria Sans', sans-serif",
                fontWeight: "bold",
              }}
            >
              Mensaje *
            </label>
            <textarea
              id="message"
              {...register("message", {
                required: true,
                pattern: messagePattern,
                minLength: 3,
                maxLength: 2000,
              })}
              className={`w-full border rounded-md p-2 ${
                errors.message ? "border-red-500" : ""
              }`}
              rows={6}
              placeholder="Escribe tu mensaje aquí..."
            />

            {errors.message?.type === "required" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                Falta completar el mensaje
              </p>
            )}
            {errors.message?.type === "pattern" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El mensaje debe cumplir con los requisitos de formato
                establecidos
              </p>
            )}
            {errors.message?.type === "minLength" && (
              <p className="text-red-500" style={{  fontWeight: "bold", color: "#B40000" }}>
                El mensaje debe tener al menos 3 caracteres
              </p>
            )}
            {errors.message?.type === "maxLength" && (
              <p className="text-red-500" style={{ fontWeight: "bold", color: "#B40000" }}>
                El mensaje no puede exceder los 2000 caracteres
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "rgba(177, 151, 71, 1)",
              color: "white",
              width: "129px",
              height: "40px",
              fontSize: "16px",
              transition: "background-color 0.3s, color 0.3s",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Enviar
          </button>
          {isPopupVisible && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
              style={{ zIndex: 9999 }}
            >
              <div className="bg-white p-8 rounded-md shadow-md">
                <p className="text-xl font-semibold mb-4">
                  Mensaje enviado correctamente
                </p>
                <p>
                  El mensaje se ha enviado exitosamente. La página se
                  actualizará en unos segundos.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
