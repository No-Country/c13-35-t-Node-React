"use client";
import { useState } from "react";
import { set } from "react-hook-form";

const citiesData = [
  "Buenos Aires",
  "Córdoba",
  "Rosario",
  "Mendoza",
  "La Plata",
];

export const Filtro = () => {
  const [searchTerm, setSearchTerm] = useState(""); // "Buenos Aires"
  const [filteredCities, setFilteredCities] = useState(citiesData); // ["Buenos Aires", "Córdoba"]
  const [selectedCities, setSelectedCities] = useState([""]); // ["Buenos Aires", "Córdoba"]
  const [selectedServices, setSelectedServices] = useState([""]); // ["wifi", "Clases y Entrenamientos"]
  const [priceRange, setPriceRange] = useState({ min: 0, max: 9999999999 }); // min and max are strings
  const [isCityListVisible, setCityListVisible] = useState(false);

  const handleServiceChange = (serviceName: any) => {
    if (!selectedServices.includes(serviceName)) {
      setSelectedServices([...selectedServices, serviceName]);
    } else {
      setSelectedServices(
        selectedServices.filter((service) => service !== serviceName)
      );
    }
  };

  const toggleCityList = () => {
    setCityListVisible(!isCityListVisible);
  };

  const searchQueri = () => {
    console.log(selectedCities);
    console.log(selectedServices);
    console.log(priceRange);
  };

  const resetAll = () => {
    setSearchTerm("");
    setFilteredCities(citiesData);
    setSelectedCities([]);
    setSelectedServices([]);
    setPriceRange({ min: 0, max: 9999999999 });
  };

  const resetSelectedCities = () => {
    setSelectedCities([]);
  };

  const addCity = (city: string) => {
    if (!selectedCities.includes(city)) {
      setSelectedCities([...selectedCities, city]);
      setFilteredCities(filteredCities.filter((c) => c !== city));
    }
  };

  const handleRemoveCity = (cityToRemove: string) => {
    setSelectedCities(selectedCities.filter((city) => city !== cityToRemove));
    setFilteredCities([...filteredCities, cityToRemove]);
  };

  return (
    <aside className="w-80">
      <div className="bg-color-button p-3 ">
        <h2>Canchas en Buenos Aires</h2>
        <button onClick={resetAll} className="text-xs">
          BORRAR FILTROS
        </button>
      </div>
      <div className="bg-color-text-black p-3 h-auto">
        <div>
          <div className="flex justify-between">
            <h2 className="text-white">Cuidad</h2>
            <button className="text-white" onClick={resetSelectedCities}>
              reset
            </button>
          </div>

          <div className="flex bg-white items-center px-2 rounded-md">
            <input
              type="text"
              id="city"
              className="w-full px-2 py-1 focus:outline-none"
            ></input>
            <button
              className="rounded-full bg-[#E8E8E8] w-6 h-6 flex items-center justify-center"
              onClick={toggleCityList}
            >
              <svg
                width="10"
                height="7"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.88543 0.540888L3.81848 3.53052L0.751524 0.540888C0.696727 0.487365 0.623168 0.457401 0.546569 0.457401C0.469971 0.457401 0.396411 0.487365 0.341615 0.540888C0.315082 0.566884 0.294004 0.597913 0.279614 0.632158C0.265224 0.666402 0.257812 0.703174 0.257812 0.74032C0.257812 0.777465 0.265224 0.814236 0.279614 0.848481C0.294004 0.882726 0.315082 0.913755 0.341615 0.939751L3.60432 4.12084C3.66162 4.17669 3.73846 4.20795 3.81848 4.20795C3.89849 4.20795 3.97534 4.17669 4.03264 4.12084L7.29534 0.940365C7.32206 0.914349 7.3433 0.883244 7.3578 0.848886C7.3723 0.814528 7.37977 0.777613 7.37977 0.74032C7.37977 0.703027 7.3723 0.666111 7.3578 0.631753C7.3433 0.597395 7.32206 0.56629 7.29534 0.540274C7.24055 0.486751 7.16699 0.456787 7.09039 0.456787C7.01379 0.456787 6.94023 0.486751 6.88543 0.540274V0.540888Z"
                  fill="#576702"
                />
              </svg>
            </button>
          </div>
          <ul className="grid grid-cols-2 gap-1 my-3">
            {selectedCities.map(
              (city) =>
                city !== "" && (
                  <li
                    key={city}
                    className="flex justify-between items-center bg-[#576702] px-3 py-1 rounded-2xl"
                  >
                    <span className="text-white text-base">{city}</span>
                    <button
                      className="text-white"
                      onClick={() => handleRemoveCity(city)}
                    >
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.86523 4.44238L9.14118 1.16644C9.25161 1.03749 9.30931 0.871617 9.30276 0.701972C9.2962 0.532326 9.22588 0.3714 9.10583 0.251354C8.98578 0.131307 8.82486 0.0609803 8.65521 0.0544277C8.48557 0.047875 8.3197 0.105579 8.19075 0.216008L4.9148 3.45825L1.61864 0.162083C1.48969 0.0516536 1.32382 -0.00604996 1.15417 0.000502706C0.984526 0.00705537 0.823601 0.0773817 0.703554 0.197429C0.583507 0.317475 0.513181 0.478401 0.506628 0.648047C0.500075 0.817692 0.557779 0.983563 0.668208 1.11251L3.95763 4.44238L0.735615 7.62396C0.665053 7.68439 0.607743 7.75875 0.567284 7.84237C0.526825 7.926 0.504088 8.01709 0.500502 8.10992C0.496917 8.20275 0.512559 8.29532 0.546447 8.38182C0.580335 8.46832 0.631738 8.54688 0.697429 8.61257C0.763119 8.67826 0.84168 8.72967 0.928179 8.76355C1.01468 8.79744 1.10725 8.81308 1.20008 8.8095C1.29291 8.80591 1.384 8.78318 1.46763 8.74272C1.55125 8.70226 1.62562 8.64495 1.68604 8.57439L4.90132 5.35911L8.09638 8.55416C8.22533 8.66459 8.3912 8.7223 8.56084 8.71575C8.73049 8.70919 8.89142 8.63887 9.01146 8.51882C9.13151 8.39877 9.20184 8.23785 9.20839 8.0682C9.21494 7.89856 9.15724 7.73269 9.04681 7.60374L5.86523 4.44238Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </li>
                )
            )}
          </ul>

          {isCityListVisible && (
            <ul className="flex flex-col gap-2">
              {filteredCities.map(
                (city) =>
                  city !== "" && (
                    <li
                      key={city}
                      className="flex justify-between items-center bg-color-button px-3 py-1 rounded-2xl"
                      onClick={() => {
                        addCity(city);
                        toggleCityList();
                      }}
                    >
                      <span className="text-white text-base">{city}</span>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
        <div>
          <h2 className="text-white">Servicios</h2>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="wifi"
                id="wifi"
                onChange={() => handleServiceChange("wifi")}
                checked={selectedServices.includes("wifi")}
              />
              <label htmlFor="wifi" className="text-white">
                Wifi
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="Clases y Entrenamientos"
                id="Clases y Entrenamientos"
                onChange={() => handleServiceChange("Clases y Entrenamientos")}
                checked={selectedServices.includes("Clases y Entrenamientos")}
              />
              <label htmlFor="Clases y Entrenamientos" className="text-white">
                Clases y Entrenamientos
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="Eventos y Torneos"
                id="Eventos y Torneos"
                onChange={() => handleServiceChange("Eventos y Torneos")}
                checked={selectedServices.includes("Eventos y Torneos")}
              />
              <label htmlFor="Eventos y Torneos" className="text-white">
                Eventos y Torneos
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="Alquiler de Equipos"
                id="Alquiler de Equipos"
                onChange={() => handleServiceChange("Alquiler de Equipos")}
                checked={selectedServices.includes("Alquiler de Equipos")}
              />
              <label htmlFor="Alquiler de Equipos" className="text-white">
                Alquiler de Equipos
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="Cafetería"
                id="Cafetería"
                onChange={() => handleServiceChange("Cafetería")}
                checked={selectedServices.includes("Cafetería")}
              />
              <label htmlFor="Cafetería" className="text-white">
                Cafetería
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white">Rango de precios</h2>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <input
                type="number"
                name="min"
                id="min"
                min={0}
                placeholder="min"
                className="w-full rounded-md px-2 py-1 focus:outline-none"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({
                    ...priceRange,
                    min: parseInt(e.target.value),
                  })
                }
              />
              <input
                type="number"
                name="max"
                id="max"
                min={0}
                max={9999999999}
                placeholder="max"
                className="w-full rounded-md px-2 py-1 focus:outline-none"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({
                    ...priceRange,
                    max: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <button
            onClick={searchQueri}
            className="bg-[#D9D9D9] w-full rounded-3xl text-center"
          >
            FILTRAR
          </button>
        </div>
      </div>
    </aside>
  );
};

export function FiltroList(){
  return (
    <div className="flex">
      <p>Ordenar por:</p>
      <select name="" id="">
        <option value="">Más relevante</option>
        <option value="">Menor precio</option>
        <option value="">Mayor precio</option>
      </select>
    </div>
  );
};
