"use client";

import { Camper } from "@/types/camper";
import styles from "./FeaturesBox.module.css";
import SpriteIcon from "../SpriteIcon/SpriteIcon";

type Props = {
  camper: Camper;
};
export default function FeaturesBox({ camper }: Props) {
  function capitalizeFirstLetter(str: string) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className={styles.featuresContainer}>
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
        {camper.radio && (
          <span className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-radio" />
            Radio
          </span>
        )}
        {camper.refrigerator && (
          <span className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-fridge" />
            Refrigerator
          </span>
        )}
        {camper.microwave && (
          <span className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-microwave" />
            Microwave
          </span>
        )}
        {camper.gas && (
          <span className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-gas-stove" />
            Gas
          </span>
        )}
        {camper.engine && (
          <span className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-petrol" />
            {capitalizeFirstLetter(camper.engine)}
          </span>
        )}
        {camper.water && (
          <span className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-water" />
            Water
          </span>
        )}
      </div>
      <div>
        <h2 className={styles.featureTitle}>Vehicle details</h2>
        <ul className={styles.vehicleDetailsList}>
          <li className={styles.vehicleDetailsItem}>
            <p>Form</p>
            {capitalizeFirstLetter(camper.form)}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Length</p>
            {camper.length}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Width</p>
            {camper.width}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Height</p>
            {camper.height}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Tank</p>
            {camper.tank}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Consumption</p>
            {camper.consumption}
          </li>
        </ul>
      </div>
    </div>
  );
}