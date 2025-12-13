"use client";
import { useState, useRef, useLayoutEffect } from "react";
import styles from "./CamperInfo.module.css";
import BookingForm from "../BookingForm/BookingForm";
import { Camper } from "@/types/camper";
import FeaturesBox from "../FeaturesBox/FeaturesBox";
import Reviews from "../ReviewsBox/ReviewsBox";

type Props = {
  camper: Camper;
};

export default function CamperInfo({ camper }: Props) {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );

  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (tabsRef.current) {
      const buttons =
        tabsRef.current.querySelectorAll<HTMLButtonElement>("button");
      const activeButton = activeTab === "features" ? buttons[0] : buttons[1];
      if (activeButton) {
        requestAnimationFrame(() => {
          setUnderlineStyle({
            width: `${activeButton.offsetWidth}px`,
            transform: `translateX(${activeButton.offsetLeft}px)`,
            transition: "transform 0.3s ease, width 0.3s ease",
          });
        });
      }
    }
  }, [activeTab]);

  return (
    <div className={styles.infoSection}>
      <div className={styles.tabs} ref={tabsRef}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "features" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "reviews" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>

        <span className={styles.underline} style={underlineStyle} />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          {activeTab === "features" && <FeaturesBox camper={camper} />}
          {activeTab === "reviews" && <Reviews reviews={camper.reviews} />}
        </div>
        <div className={styles.rightColumn}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}