import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button(props: ButtonProps) {
  return <button className={styles.button} {...props} />;
}
