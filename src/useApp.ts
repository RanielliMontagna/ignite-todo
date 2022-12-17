import { useState, InvalidEvent } from "react";

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function useApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, _setNewTaskTitle] = useState("");

  function handleToggleTaskCompletion(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(updatedTasks);
  }

  function handleCreateNewTask() {
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      isCompleted: false,
    };

    setTasks((oldState) => [...oldState, newTask]);
    _setNewTaskTitle("");
  }

  function handleRemoveTask(id: number) {
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

  const tasksCount = tasks.length;
  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

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
