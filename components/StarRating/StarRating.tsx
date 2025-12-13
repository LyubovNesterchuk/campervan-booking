"use client";

import SpriteIcon from "../SpriteIcon/SpriteIcon";
import styles from "./StarRating.module.css";

type Props = {
  rating: number;
  max?: number;
};

export default function StarsRating({ rating, max = 5 }: Props) {
  return (
    <span style={{ display: "inline-flex", gap: "4px", alignItems: "center" }}>
      {Array.from({ length: max }, (_, i) => (
        <SpriteIcon
          key={i}
          name={i < rating ? "icon-star-fill" : "icon-star-not-fill"}
          className={styles.featureIcon}
        />
      ))}
    </span>
  );
}