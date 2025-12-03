// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import { Metadata } from "next";

// import NoteDetailsClient from "./CamperDetails.client";
// import { fetchServerCamperById } from "@/lib/api/serverApi";


// type Props = {
//   params: Promise<{ id: string }>;
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {

//   const { id } = await params;

//   const camper = await fetchServerCamperById(id);

//   return {
//     title: `Note: ${camper.title}`,
//     description: `${camper.content.slice(0, 30)}...`,

//     openGraph: {
//       title: `Camper: ${camper.title}`,
//       description: camper.content.slice(0, 100),
//       url: `https://notehub.com/notes/${id}`,
//       siteName: 'Campervan Booking',
//       images: [
//         {
//           url: 'https://ac.goit.global/fullstack/react/og-meta.jpg',
//           width: 1200,
//           height: 630,
//           alt: camper.title,
//         },
//       ],
//       type: 'website',
//     },
//   }
// }

// export default async function CamperDetailsPage({ params }: Props) {

// const { id } = await params;

// const queryClient = new QueryClient();

// await queryClient.prefetchQuery({
//   queryKey: ["camper", id],
//   queryFn: () => fetchServerCamperById(id),
// });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NoteDetailsClient />
//     </HydrationBoundary>
//   );
// }