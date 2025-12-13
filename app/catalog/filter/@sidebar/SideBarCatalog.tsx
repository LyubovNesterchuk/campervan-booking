"use client";
import { useState, ChangeEvent } from "react";
import styles from "./SideBarCatalog.module.css";
import FilterCheckbox from "@/components/FilterCheckbox/FilterCheckbox";
import FilterRadio from "@/components/FilterRadio/FilterRadio";
import SpriteIcon from "@/components/SpriteIcon/SpriteIcon";
import { useCatalogStore } from "@/lib/store/campersStore";

export interface LocalFilters {
  location: string;
  form: string;
  AC: boolean;
  kitchen: boolean;
  bathroom: boolean;
  TV: boolean;
  transmission: string;
}

const SideBarCatalog = () => {
  const { setFilters } = useCatalogStore();

  const [localFilters, setLocalFilters] = useState<LocalFilters>({
    location: "",
    form: "",
    AC: false,
    kitchen: false,
    bathroom: false,
    TV: false,
    transmission: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "automatic") {
        setLocalFilters((prev) => ({
          ...prev,
          transmission: checked ? "automatic" : "",
        }));
      } else {
        setLocalFilters((prev) => ({ ...prev, [name]: checked }));
      }
    } else if (type === "radio") {
      setLocalFilters((prev) => ({ ...prev, [name]: value }));
    } else {
      setLocalFilters((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleRadioChange = (
    value: string,
    name: keyof LocalFilters,
    isChecked: boolean
  ) => {
    setLocalFilters((prev) => ({
      ...prev,
      [name]: isChecked ? "" : value,
    }));
  };

  const handleSearch = () => {
    console.log("Applied filters:", localFilters);
    setFilters(localFilters);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.mb40}>
        <label className={styles.sidebarLabel}>Location</label>
        <div className={styles.sidebarInputWrapper}>
          <input
            type="text"
            name="location"
            value={localFilters.location}
            onChange={handleChange}
            placeholder="City"
            className={styles.sidebarInput}
          />
          <SpriteIcon name="icon-map" className={styles.sidebarIconInside} />
        </div>
      </div>

      <div className={styles.mb32}>
        <h3 className={styles.sidebarSectionTitle}>Filters</h3>
        <h4 className={styles.sidebarBlockTitle}>Vehicle equipment</h4>

        <div className={styles.filterGrid}>
          <FilterCheckbox
            name="AC"
            label="AC"
            icon={
              <SpriteIcon name="icon-wind" className={styles.filterIconSvg} />
            }
            checked={localFilters.AC}
            onChange={handleChange}
          />

          <FilterCheckbox
            name="automatic"
            label="Automatic"
            icon={
              <SpriteIcon
                name="icon-diagram"
                className={styles.filterIconSvg}
              />
            }
            checked={localFilters.transmission === "automatic"}
            onChange={handleChange}
          />

          <FilterCheckbox
            name="kitchen"
            label="Kitchen"
            icon={
              <SpriteIcon name="icon-cup-hot" className={styles.filterIconSvg} />
            }
            checked={localFilters.kitchen}
            onChange={handleChange}
          />

          <FilterCheckbox
            name="TV"
            label="TV"
            icon={
              <SpriteIcon name="icon-tv" className={styles.filterIconSvg} />
            }
            checked={localFilters.TV}
            onChange={handleChange}
          />

          <FilterCheckbox
            name="bathroom"
            label="Bathroom"
            icon={
              <SpriteIcon name="icon-shower" className={styles.filterIconSvg} />
            }
            checked={localFilters.bathroom}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.mb40}>
        <h4 className={styles.sidebarBlockTitle}>Vehicle type</h4>
        <div className={styles.radioGrid}>
          <FilterRadio
            name="form"
            value="panelTruck"
            label="Van"
            icon={
              <SpriteIcon name="icon-bi_grid-1x2" className={styles.filterIconSvg} />
            }
            checked={localFilters.form === "panelTruck"}
            onChange={handleRadioChange}
          />

          <FilterRadio
            name="form"
            value="fullyIntegrated"
            label="Fully Integrated"
            icon={
              <SpriteIcon name="icon-bi_grid-2x2" className={styles.filterIconSvg} />
            }
            checked={localFilters.form === "fullyIntegrated"}
            onChange={handleRadioChange}
          />

          <FilterRadio
            name="form"
            value="alcove"
            label="Alcove"
            icon={
              <SpriteIcon
                name="icon-bi_grid-3x3"
                className={styles.filterIconSvg}
              />
            }
            checked={localFilters.form === "alcove"}
            onChange={handleRadioChange}
          />
        </div>
      </div>

      <button className={styles.sidebarBtn} onClick={handleSearch}>
        Search
      </button>
    </aside>
  );
};

export default SideBarCatalog;