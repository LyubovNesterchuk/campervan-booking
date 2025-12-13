import { Suspense } from "react";

export default function LayoutCampers ({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <section>
      <aside>
        <Suspense fallback={<div>Loading...</div>}>{sidebar}</Suspense>
      </aside>
      <div >{children}</div>
    </section>
  );
};


