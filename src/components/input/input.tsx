import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export function Input(props: InputProps) {
  return <input className={styles.input} {...props} />;
}
