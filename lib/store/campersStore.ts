import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Camper } from "@/types/camper";

export interface Filters {
  location: string; 
  form: string; 
  transmission?: string; 
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
}

interface CamperState {
  campers: Camper[];
  favorites: string[];
  filters: Filters;
  setCampers: (campers: Camper[]) => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  setFilters: (filters: Partial<Filters>) => void;
//   clearFilters: () => void;
  filteredCampers: () => Camper[];
}

export const useCamperStore = create<CamperState>()(
  persist(
    (set, get) => ({
      campers: [],
      favorites: [],
      filters: {
        location: "",
        form: "",
      },

      setCampers: (campers) => set({ campers }),

      addFavorite: (id) => {
        const { favorites } = get();
        if (!favorites.includes(id)) {
          set({ favorites: [...favorites, id] });
        }
      },

      removeFavorite: (id) =>
        set({ favorites: get().favorites.filter((f) => f !== id) }),

      toggleFavorite: (id) => {
        const { favorites, addFavorite, removeFavorite } = get();
        if (favorites.includes(id)) {
          removeFavorite(id);
        } else {
          addFavorite(id);
        }
      },

      isFavorite: (id) => get().favorites.includes(id),

      setFilters: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),

    //   clearFilters: () =>
    //     set({
    //       filters: {
    //         location: "",
    //         form: "",
    //       },
    //     }),

      filteredCampers: () => {
        const { campers, filters } = get();

        return campers.filter((camper) => {
          
          if (
            filters.location &&
            !camper.location
              ?.toLowerCase()
              .includes(filters.location.toLowerCase())
          ) {
            return false;
          }

            if (filters.form && camper.form !== filters.form) {
            return false;
          }

            if (filters.transmission && camper.transmission !== filters.transmission) {
            return false;
          }

          const equipmentFilters: Array<keyof Filters> = [
            "AC",
            "kitchen",
            "bathroom",
            "TV",
            "radio",
            "refrigerator",
            "microwave",
            "gas",
            "water",
          ];

          for (const feature of equipmentFilters) {
             if (filters[feature] && !camper[feature as keyof Camper]) {
              return false;
            }
          }

          return true;
        });
      },
    }),
    {
      name: "camper-favorites",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);




// import { create } from "zustand";
// import { Camper } from "../types/camper";

// export interface Filters {
//   location: string;
//   type: string;
//   AC?: boolean;
//   kitchen?: boolean;
//   bathroom?: boolean;
//   TV?: boolean;
//   radio?: boolean;
//   refrigerator?: boolean;
//   microwave?: boolean;
//   gas?: boolean;
//   water?: boolean;
//   [key: string]: string | boolean | undefined;
// }

// interface CamperState {
//   campers: Camper[];
//   favorites: string[];
//   filters: Filters;
//   setCampers: (campers: Camper[]) => void;
//   addFavorite: (id: string) => void;
//   removeFavorite: (id: string) => void;
//   setFilters: (filters: Partial<Filters>) => void;
//   clearFilters: () => void;
// }

// const FAVORITES_KEY = "favorites";

// export const useCamperStore = create<CamperState>((set, get) => ({
//   campers: [],
//   favorites:
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]")
//       : [],
//   filters: { location: "", type: "" },
//   setCampers: (campers) => set({ campers }),
//   addFavorite: (id) => {
//     const newFavs = [...get().favorites, id];
//     set({ favorites: newFavs });
//     localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavs));
//   },
//   removeFavorite: (id) => {
//     const newFavs = get().favorites.filter((f) => f !== id);
//     set({ favorites: newFavs });
//     localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavs));
//   },
//   setFilters: (filters) =>
//     set((state) => ({ filters: { ...state.filters, ...filters } })),
//   clearFilters: () => set({ filters: { location: "", type: "" } }),
// }));



