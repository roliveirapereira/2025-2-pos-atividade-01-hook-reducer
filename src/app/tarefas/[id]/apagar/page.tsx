"use client";

import Layout from "@/components/Layout";
import { useTasks } from "@/lib/TaskContext";
import { Task } from "@/types/task";
import { useParams, useRouter } from "next/navigation";

export default function ApagarTarefaPage() {
  const { tasks, dispatch } = useTasks();
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const task = tasks.find((t: Task) => t.id === id);

  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: id });
    router.push("/tarefas");
  };

  if (!task) return <Layout><p>Tarefa não encontrada.</p></Layout>;

  return (
    <Layout>
      <h2>Apagar Tarefa</h2>
      <p>Tem certeza que deseja apagar a tarefa "{task.title}"?</p>
      <button onClick={handleDelete}>Sim, apagar</button>
      <button onClick={() => router.push("/tarefas")}>Cancelar</button>
    </Layout>
  );
}
