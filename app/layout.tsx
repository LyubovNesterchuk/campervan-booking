import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  metadataBase: new URL("https://campervan-booking.vercel.app"),

  title: "TravelTrucks",
  description: "Travel Trucks is a modern, responsive web application for searching and booking campervans",

  openGraph: {
    title: "TravelTrucks",
    description: "Book campervan of your dreams",
    url: "/",
    siteName: "TravelTrucks",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Campervan",
      },
    ],
    type: "website",
  },
};

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body className={inter.variable}>
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  );
}


// export default function RootLayout({
//   children
// }: Readonly<{
//   children: React.ReactNode;
//  }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable}`}>
//         <TanStackProvider>
//           <Header/>
//           {children}
//         </TanStackProvider>
//       </body>
//     </html>
//   );
// }


