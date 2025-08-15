"use client";

import { Task } from "@/types/task";
import Link from "next/link";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map(task => (
        <li key={task.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.done ? "✅ Concluída" : "⌛ Pendente"}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href={`/tarefas/${task.id}`}>Editar</Link>
            <Link href={`/tarefas/${task.id}/apagar`}>Apagar</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
