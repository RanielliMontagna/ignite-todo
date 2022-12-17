import { useState } from "react";
import { Trash } from "phosphor-react";

import type { ITask } from "../../useApp";
import { Checkbox } from "../checkbox/checkbox";
import styles from "./task.module.css";

interface TaskProps extends ITask {
  handleRemoveTask: (id: string) => void;
  handleToggleTaskCompletion: (id: string) => void;
}

export function Task({
  id,
  title,
  isCompleted,
  handleRemoveTask,
  handleToggleTaskCompletion,
}: TaskProps) {
  return (
    <div className={styles.task}>
      <Checkbox
        checked={isCompleted}
        onClick={() => handleToggleTaskCompletion(id)}
      />
      <p className={isCompleted ? styles.completedTask : undefined}>{title}</p>
      <button
        className={styles.deleteTask}
        onClick={() => {
          handleRemoveTask(id);
        }}
      >
        <Trash size={18} />
      </button>
    </div>
  );
}
