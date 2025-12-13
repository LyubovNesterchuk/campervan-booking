import { LocalFilters } from "@/app/catalog/filter/@sidebar/SideBarCatalog";
import styles from "./FilterRadio.module.css";

interface FilterRadioProps {
  name: keyof LocalFilters;
  value: string;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (
    value: string,
    name: keyof LocalFilters,
    isChecked: boolean
  ) => void;
}

const FilterRadio = ({
  name,
  value,
  label,
  icon,
  checked,
  onChange,
}: FilterRadioProps) => {
  const className = `${styles.filterItem} ${styles.radioItemH24} ${
    checked ? styles.filterItem_checked : ""
  }`;

  const handleClick = () => {
    onChange(value, name, checked); 
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className={styles.filterIcon}>{icon}</div>
      <span className={styles.filterLabel}>{label}</span>
    </div>
  );
};

export default FilterRadio;