"use client";

import { Task } from "@/types/task";
import { useState } from "react";

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (task: Task) => void;
}

export default function TaskForm({ initialData, onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: initialData?.id || crypto.randomUUID(),
      title,
      description,
      done: initialData?.done || false,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
}
