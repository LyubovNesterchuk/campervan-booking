import { Suspense } from "react";
import css from "./LayoutCampers.module.css"

export default function LayoutCampers ({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>
        <Suspense fallback={<div>Loading...</div>}>{sidebar}</Suspense>
      </aside>
      <div className={css.campersWrapper}>{children}</div>
    </section>
  );
};