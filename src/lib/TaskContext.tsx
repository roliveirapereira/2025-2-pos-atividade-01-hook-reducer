"use client";

import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";
import { taskReducer } from "./taskReducer";
import type { Task } from "@/types/task";

type TaskContextType = {
  tasks: Task[];
  dispatch: React.Dispatch<any>;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // Carrega do localStorage ao iniciar
  useEffect(() => {
    try {
      const raw = localStorage.getItem("tasks");
      if (raw) {
        const parsed: Task[] = JSON.parse(raw);
        dispatch({ type: "LOAD_TASKS", payload: parsed });
      }
    } catch (err) {
      console.error("Falha ao carregar tasks do localStorage:", err);
    }
  }, []);

  // Persiste no localStorage quando tasks mudar
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (err) {
      console.error("Falha ao salvar tasks no localStorage:", err);
    }
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) {
    throw new Error("useTasks deve ser usado dentro de <TaskProvider>.");
  }
  return ctx;
}
