"use client";
import StarsRating from "../StarRating/StarRating";
import styles from "./ReviewsBox.module.css";

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

type Props = {
  reviews: Review[];
};

export default function Reviews({ reviews }: Props) {
  if (!reviews || reviews.length === 0) {
    return <p className={styles.noReviews}>No reviews yet.</p>;
  }

  return (
    <div className={styles.reviewsContainer}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={styles.reviewerInfo}>
              <span className={styles.reviewerName}>
                {review.reviewer_name}
              </span>
              <StarsRating rating={review.reviewer_rating} />
            </div>
          </div>
          <p className={styles.reviewComment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}