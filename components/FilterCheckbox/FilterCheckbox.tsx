import { ChangeEvent } from "react";
import styles from "./FilterCheckbox.module.css";
import { LocalFilters } from "@/app/catalog/filter/@sidebar/SideBarCatalog";
const FilterCheckbox = ({
  name,
  label,
  icon,
  checked,
  onChange,
}: {
  name: keyof LocalFilters | "automatic";
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const className = `${styles.filterItem} ${
    checked ? styles.filterItem_checked : ""
  }`;
  return (
    <label className={className}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.filterHiddenInput}
      />
      <div className={styles.filterIcon}>{icon}</div>
      <span className={styles.filterLabel}>{label}</span>
    </label>
  );
};

export default FilterCheckbox;