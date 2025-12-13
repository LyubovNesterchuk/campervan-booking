export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;

  AC: boolean;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;

  gallery: {
    thumb: string;
    original: string;
  }[];

  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
}



// export interface GalleryItem {
//   thumb: string;
//   original: string;
// }

// export interface Review {
//   reviewer_name: string;
//   reviewer_rating: number;
//   comment: string;
// }

// export type CamperForm = "alcove" | "panelTruck" | "fullyIntegrated";
// export type Transmission = "automatic" | "manual";
// export type Engine = "diesel" | "petrol" | "hybrid";

// export interface Camper {
//   id: string;
//   name: string;
//   price: number;
//   rating: number;
//   location: string;
//   description: string;
//   form: CamperForm; 
//   length: string;
//   width: string;
//   height: string;
//   tank: string;
//   consumption: string;
//   transmission: Transmission; 
//   engine: Engine; 
//   AC: boolean;
//   bathroom: boolean;
//   kitchen: boolean;
//   TV: boolean;
//   radio: boolean;
//   refrigerator: boolean;
//   microwave: boolean;
//   gas: boolean;
//   water: boolean;
//   gallery: GalleryItem[];
//   reviews: Review[];
// }