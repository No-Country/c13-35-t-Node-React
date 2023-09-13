"use client";

initMercadoPago("TEST-a0783c71-020e-4b54-8c15-82a5c3dc30df", {locale: 'es-AR'});
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";


const Pago = () => {

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1568105682574-d85515d943e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "894px",
          height: "610px",
          padding: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid #000000",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            marginRight: "230px",
            fontWeight: "bold",
            fontSize: "32px",
          }}
        >
          REALIZÁ EL PAGO DE TU RESERVA
        </h1>
        <h2
  style={{
    marginTop: "40px",
    fontWeight: "bold",
    fontSize: "26px",
    display: "flex",
    alignItems: "center", // Centra verticalmente la imagen y el texto
  }}
>
  
  MERCADO PAGO

</h2>


        
        <div
        style={{
          marginTop: "40px",
          
          fontSize: "18px",
          border: "2px solid #000000",
          padding: "10px",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <div style={{
          fontWeight: "bold",
          fontSize: "19px",
          
        }}>Detalle de tu reserva</div>
        <div>
          {/* Aquí muestra la información de la cancha reservada */}
          <br></br>
          <p>Cancha: Nombre de la cancha</p>
          <p>Fecha: Fecha de la reserva</p>
          <p>Hora: Hora de la reserva</p>
          <br></br>
          <p>Pagás: $xxx</p> 

          <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
        </div>
      </div>
        
        
      </div>
    </div>
  );
  
};

export default Pago;
