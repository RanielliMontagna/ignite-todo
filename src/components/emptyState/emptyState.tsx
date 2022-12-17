import { ClipboardText } from "phosphor-react";
import styles from "./emptyState.module.css";

export function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <ClipboardText size={56} className={styles.icon} />
      <div className={styles.text}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
