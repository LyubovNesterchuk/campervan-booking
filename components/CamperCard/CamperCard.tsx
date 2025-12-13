"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./CamperCard.module.css";
import Link from "next/link";
import { Camper } from "@/types/camper";
import SpriteIcon from "../SpriteIcon/SpriteIcon";
import { useFavoritesStore } from "@/lib/store/favoritesStore";

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  const totalReviews = camper.reviews.length;

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);
  const isFavorite = favorites.includes(camper.id);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleFavoriteClick = () => {
    toggleFavorite(camper.id);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={camper.gallery[0].thumb}
          alt={camper.name}
          width={292}
          height={320}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>
          <div className={styles.rightSidePrice}>
            <p className={styles.price}>€{camper.price.toFixed(2)}</p>
            <button
              type="button"
              className={`${styles.favoriteBtn} ${
                isAnimating ? styles.animateHeart : ""
              }`}
              onClick={handleFavoriteClick}
            >
              <SpriteIcon
                className={styles.filterIconSvgHeart}
                name="icon-heart"
                color={isFavorite ? "#e44848" : "#000"}
              />
            </button>
          </div>
        </div>

        <div className={styles.ratingLocation}>
          <span className={styles.rating}>
            <SpriteIcon
              className={styles.filterIconSvg}
              name={"icon-star-fill"}
            />
            {camper.rating} (Total reviews:{totalReviews})
          </span>

          <span className={styles.location}>
            <SpriteIcon className={styles.filterIconSvg} name={"icon-map"} />
            {camper.location}
          </span>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.features}>
          {camper.AC && (
            <span className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-wind" />
              AC
            </span>
          )}
          {camper.kitchen && (
            <span className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-cup-hot" />
              Kitchen
            </span>
          )}
          {camper.TV && (
            <span className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-tv" />
              TV
            </span>
          )}
          {camper.bathroom && (
            <span className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-shower" />
              Bathroom
            </span>
          )}
          {camper.transmission === "automatic" && (
            <span className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-diagram" />
              Automatic
            </span>
          )}
        </div>

        <Link href={`/catalog/${camper.id}`} className={styles.showMoreBtn}>
          Show more
        </Link>
      </div>
    </article>
  );
}