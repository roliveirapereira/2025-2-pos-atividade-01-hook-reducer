"use client";

import Layout from "@/components/Layout";
import TaskForm from "@/components/TaskForm";
import { Task } from "@/types/task";
import { useTasks } from "@/lib/TaskContext";
import { useRouter } from "next/navigation";

export default function NovaTarefaPage() {
  const { dispatch } = useTasks();
  const router = useRouter();

  const handleAdd = (task: Task) => {
    dispatch({ type: "ADD_TASK", payload: task });
    router.push("/tarefas");
  };

  return (
    <Layout>
      <h2>Nova Tarefa</h2>
      <TaskForm onSubmit={handleAdd} />
    </Layout>
  );
}
