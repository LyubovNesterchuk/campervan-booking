import { Metadata } from "next";
import Hero from "./components/Hero/Hero";

export const metadata: Metadata = {
  title: "Home"
  
};


export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

