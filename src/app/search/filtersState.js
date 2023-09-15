import { create } from "zustand";

const useFiltersStore = create((set) => ({
  canchas: [],
  ciudad: "",
  deporte: "",
  servicios: [],
  minimo: "",
  maximo: "",

  setCanchas: (canchas) => set({ canchas }),
  setCiudad: (ciudad) => set({ ciudad }),
  setDeporte: (deporte) => set({ deporte }),
  setServicios: (servicios) => set({ servicios }),
  setMinimo: (minimo) => set({ minimo }),
  setMaximo: (maximo) => set({ maximo }),
}));

export default useFiltersStore;
