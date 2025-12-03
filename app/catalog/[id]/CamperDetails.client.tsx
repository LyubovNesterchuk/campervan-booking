//"use client";

// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "next/navigation";

// import css from "./CamperDetails.module.css";
// import { fetchCamperById } from "@/lib/api/clientApi";

// export default function CamperDetailsClient () {
  
//   const { id } = useParams<{ id: string }>();
  
//   const { data: note, isLoading, isError } = useQuery({
//     queryKey: ["camper", id],
//     queryFn: () => fetchCamperById(id),
//     refetchOnMount: false,
//   });


//   if (isLoading) {
//     return <p>Loading, please wait...</p>;
//   }

//   if (isError || !note) {
//     return <p>Something went wrong.</p>;
//   }

//   return (
//     <div className={css.container}>
//       <div className={css.item}>
//         <div className={css.header}>
//           <h2>{note.title}</h2>
//         </div>
//         <p className={css.content}>{camper.content}</p>
//         <p className={css.date}>
//             {note.updatedAt
//             ? `Updated at: ${new Date(note.updatedAt).toLocaleString()}`
//             : `Created at: ${new Date(note.createdAt).toLocaleString()}`}
//         </p>
//       </div>
//     </div>
//   );
// }