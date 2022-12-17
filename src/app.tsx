import { useState } from "react";

import "./global.css";
import styles from "./app.module.css";

import { Header } from "./components/header/header";
import { Button } from "./components/button/button";
import { Input } from "./components/input/input";
import { useApp } from "./useApp";
import { EmptyState } from "./components/emptyState/emptyState";
import { Task } from "./components/task/task";

function App() {
  const {
    tasks,
    tasksCount,
    completedTasksCount,
    newTaskTitle,
    handleNewTaskChange,
    handleSubmit,
    handleNewInvalidTask,
  } = useApp();

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.todoForm} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskTitle}
            onChange={handleNewTaskChange}
            required
            onInvalid={handleNewInvalidTask}
          />
          <Button type="submit">Criar</Button>
        </form>
        <div className={styles.tasks}>
          <header className={styles.tasksHeader}>
            <p>
              Tarefas criadas <span>{tasksCount}</span>
            </p>
            <p>
              Concluídas{" "}
              <span>
                {completedTasksCount} de {tasksCount}
              </span>
            </p>
          </header>
          {tasks.length > 0 ? (
            tasks.map((task) => <Task key={task.id} />)
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
