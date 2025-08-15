"use client";

import Layout from "@/components/Layout";
import TaskForm from "@/components/TaskForm";
import { Task } from "@/types/task";
import { useTasks } from "@/lib/TaskContext";
import { useParams, useRouter } from "next/navigation";

export default function EditarTarefaPage() {
  const { tasks, dispatch } = useTasks();
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const task = tasks.find((t: Task) => t.id === id);

  const handleUpdate = (updated: Task) => {
    dispatch({ type: "UPDATE_TASK", payload: updated });
    router.push("/tarefas");
  };

  if (!task) return <Layout><p>Tarefa não encontrada.</p></Layout>;

  return (
    <Layout>
      <h2>Editar Tarefa</h2>
      <TaskForm initialData={task} onSubmit={handleUpdate} />
    </Layout>
  );
}
