import { useState, useEffect, InvalidEvent } from "react";
import uuid from "react-uuid";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function useApp() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskTitle, _setNewTaskTitle] = useState("");

  function handleToggleTaskCompletion(id: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(updatedTasks);
  }

  function handleCreateNewTask() {
    const newTask = {
      id: uuid(),
      title: newTaskTitle,
      isCompleted: false,
    };

    setTasks((oldState) => [...oldState, newTask]);
    _setNewTaskTitle("");
  }

  function handleRemoveTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  function handleNewTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.currentTarget.setCustomValidity("");
    _setNewTaskTitle(e.target.value);
  }

  function handleNewInvalidTask(e: InvalidEvent<HTMLInputElement>) {
    e.currentTarget.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    handleCreateNewTask();
  }

  function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("@todo:tasks");

    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }

  function setTasksToLocalStorage() {
    localStorage.setItem("@todo:tasks", JSON.stringify(tasks));
  }

  const tasksCount = tasks.length;
  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", setTasksToLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", setTasksToLocalStorage);
    };
  }, [tasks]);

  return {
    tasks,
    newTaskTitle,
    tasksCount,
    completedTasksCount,
    handleToggleTaskCompletion,
    handleRemoveTask,
    handleNewTaskChange,
    handleNewInvalidTask,
    handleSubmit,
  };
}
