import css from "./not-found.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://campervan-booking.vercel.app"),

  title: "404 - Page not found",
  description: "Sorry, the page you are looking for does not exist.",
  
  openGraph: {
    title: "404 - Page not found",
    description: "Sorry, the page you are looking for does not exist.",
    url: "https://campervan-booking.vercel.app/not-found",
    siteName: "Travel Trucks",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "404 - Page not found",
      },
    ],
    type: "website",
  },
};

export default function NotFound() {
    return (
        <div className={css.container}>
            <h1 className={css.title}>404 - Page not found</h1>
            <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
        </div>);
}