import { getCamperById } from "@/lib/api/clientApi";
import styles from "./CamperDetailsPage.module.css";
import SpriteIcon from "@/components/SpriteIcon/SpriteIcon";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperInfo from "@/components/CamperInfo/CamperInfo";

type Props = {
  params: { id: string };
};

export default async function CamperDetailsPage({ params }: Props) {
  const { id } = await params;
  const camper = await getCamperById(id);
  const totalReviews = camper.reviews.length;

  return (
    <section className={styles.camperDetailsPageSection}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>

          <div className={styles.ratingLocation}>
            <span className={styles.rating}>
              <SpriteIcon
                className={styles.filterIconSvg}
                name={"icon-star-fill"}
              />
              <span className={styles.totalReviews}>
                {camper.rating} (Total reviews:{totalReviews})
              </span>
            </span>

            <span className={styles.location}>
              <SpriteIcon className={styles.filterIconSvg} name={"icon-map"} />
              {camper.location}
            </span>
          </div>
          <div className={styles.rightSidePrice}>
            <p className={styles.price}>€{camper.price.toFixed(2)}</p>
          </div>
        </div>
        <CamperGallery camper={camper} />
        <p className={styles.description}>{camper.description}</p>
        <CamperInfo camper={camper} />
      </div>
    </section>
  );
}