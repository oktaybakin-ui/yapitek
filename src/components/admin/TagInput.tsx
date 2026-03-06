"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

export default function TagInput({ value, onChange, placeholder = "Ekle..." }: Props) {
  const [input, setInput] = useState("");

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = input.trim();
      if (tag && !value.includes(tag)) {
        onChange([...value, tag]);
      }
      setInput("");
    }
  }

  function remove(tag: string) {
    onChange(value.filter((t) => t !== tag));
  }

  return (
    <div className="border border-gray-300 rounded p-2 flex flex-wrap gap-2 focus-within:border-accent transition-colors">
      {value.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs px-2 py-1 rounded"
        >
          {tag}
          <button type="button" onClick={() => remove(tag)}>
            <X size={12} />
          </button>
        </span>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={value.length === 0 ? placeholder : ""}
        className="flex-1 min-w-[100px] outline-none text-sm bg-transparent"
      />
    </div>
  );
}
