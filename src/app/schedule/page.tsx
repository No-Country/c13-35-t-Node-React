"use client";

// pages/Schedule.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Schedule() {
  const [scheduleData, setScheduleData] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/scheduleData.json');
      const data = await response.json();
      setScheduleData(data);
    }

    fetchData();
  }, []);

  if (!scheduleData) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-black text-4xl font-medium uppercase mb-4">TURNOS DISPONIBLES</h1>
      <h2 className="text-black text-2xl mb-2 font-medium">{scheduleData.date}</h2>
      <h3 className="text-black text-xl mb-4 font-medium">Valor $500/hora</h3>

      <div className="grid grid-cols-3 gap-4 mb-4 w-1/3">
        {scheduleData.times.map((time, index) => (
          <button
            key={index}
            className={`relative border rounded-lg p-4 
                        ${scheduleData.unavailable.includes(time) ? 'bg-cdcdcd text-b6b4b4 cursor-not-allowed' : 'bg-f3f5f7 text-black hover:bg-gray-300'}
                        ${selectedTime === time ? 'border-4 border-green-500' : 'border-black'}`}
            disabled={scheduleData.unavailable.includes(time)}
            onClick={() => setSelectedTime(time)}
          >
            {time}
            {selectedTime === time && <div className="absolute top-0 right-0 w-5 h-5 bg-black rounded-full"></div>}
          </button>
        ))}
      </div>

      <Link href="/pago"><button className="bg-576702 text-f9f9f9 w-1/3 py-2 rounded-lg mb-4">CONFIRMAR LA RESERVA</button></Link>
      <Link href="/search"><button className="bg-f9f9f9 border-2 border-576702 text-576702 w-1/3 py-2 rounded-lg">VOLVER</button></Link>
      <div
    className='bg-cover bg-center w-full h-full absolute top-0 left-0'
    style={{
      backgroundImage: 'url(../../assets/horarios-fondo.jpg)',
      zIndex: '-1'
    }}
  ></div>
    </div>
  );
}
