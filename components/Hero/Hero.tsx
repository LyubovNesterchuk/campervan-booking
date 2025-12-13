import Link from "next/link";
import css from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={css.container}  aria-label="Hero section">
       <Image 
        src="/hero-imagine.jpg"
        alt="Vintage camper van at sunset"
        fill
        priority
        className={css.backgroundImage}
        /> 
        <div className={css.content}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.text}>
                You can find everything you want in our catalog
            </p>
            <Link href="/catalog" className={css.button}>
                View Now
            </Link>
        </div>  
    </section>
  );
}