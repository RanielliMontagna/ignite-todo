import styles from "./checkbox.module.css";
import { Check } from "phosphor-react";

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
}

export function Checkbox({ checked, onClick }: CheckboxProps) {
  return (
    <div
      className={styles.checkbox + " " + (checked ? styles.checked : "")}
      onClick={onClick}
    >
      {checked && <Check size={12} weight="bold" />}
    </div>
  );
}
