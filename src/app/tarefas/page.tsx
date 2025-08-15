"use client";

import Layout from "@/components/Layout";
import TaskList from "@/components/TaskList";
import { useTasks } from "@/lib/TaskContext";

export default function TarefasPage() {
  const { tasks } = useTasks();

  return (
    <Layout>
      <h2>Lista de Tarefas</h2>
      <TaskList tasks={tasks} />
    </Layout>
  );
}
