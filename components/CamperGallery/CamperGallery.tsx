"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./CamperGallery.module.css";

type GalleryImage = { thumb: string; original: string };
type Props = { camper: { name: string; gallery: GalleryImage[] } };

export default function CamperGallery({ camper }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = camper.gallery.map((img) => ({ src: img.original }));

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.thumbs}>
        {camper.gallery.map((img, index) => (
          <div
            key={index}
            className={`${styles.thumb} ${
              photoIndex === index && isOpen ? styles.active : ""
            }`}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <Image
              src={img.thumb}
              alt={`${camper.name} ${index + 1}`}
              width={292}
              height={312}
              className={styles.img}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          slides={slides}
          open={isOpen}
          index={photoIndex}
          close={() => setIsOpen(false)}
          controller={{ closeOnBackdropClick: true }}
          styles={{
            container: { backgroundColor: "rgba(0,0,0,0.3)" },
          }}
        />
      )}
    </div>
  );
}