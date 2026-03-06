"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Upload, X, GripVertical } from "lucide-react";

interface Props {
  value: string[];
  onChange: (urls: string[]) => void;
  bucket: string;
  max?: number;
}

export default function MultiImageUploader({ value, onChange, bucket, max = 10 }: Props) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const remaining = max - value.length;
    if (remaining <= 0) return;

    const toUpload = Array.from(files).slice(0, remaining);
    setUploading(true);

    const newUrls: string[] = [];
    for (const file of toUpload) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("bucket", bucket);

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.url) newUrls.push(data.url);
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }

    onChange([...value, ...newUrls]);
    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  }

  function remove(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  function handleDragStart(index: number) {
    setDragIdx(index);
  }

  function handleDragOver(e: React.DragEvent, index: number) {
    e.preventDefault();
    setDragOverIdx(index);
  }

  function handleDrop(index: number) {
    if (dragIdx === null || dragIdx === index) {
      setDragIdx(null);
      setDragOverIdx(null);
      return;
    }

    const updated = [...value];
    const [moved] = updated.splice(dragIdx, 1);
    updated.splice(index, 0, moved);
    onChange(updated);
    setDragIdx(null);
    setDragOverIdx(null);
  }

  function handleDragEnd() {
    setDragIdx(null);
    setDragOverIdx(null);
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {value.map((url, i) => (
          <div
            key={`${url}-${i}`}
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragOver={(e) => handleDragOver(e, i)}
            onDrop={() => handleDrop(i)}
            onDragEnd={handleDragEnd}
            className={`relative group aspect-square rounded border overflow-hidden cursor-grab active:cursor-grabbing transition-all ${
              dragOverIdx === i && dragIdx !== i
                ? "border-accent border-2 scale-105"
                : dragIdx === i
                ? "opacity-40 border-gray-300"
                : "border-gray-200"
            }`}
          >
            <Image src={url} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            <div className="absolute top-1.5 left-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <GripVertical size={16} className="text-white drop-shadow" />
            </div>
            <button
              type="button"
              onClick={() => remove(i)}
              className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={14} />
            </button>
            {i === 0 && (
              <span className="absolute bottom-1.5 left-1.5 bg-accent text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                Kapak
              </span>
            )}
          </div>
        ))}

        {value.length < max && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="aspect-square border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center gap-1.5 text-gray-400 hover:border-accent hover:text-accent transition-colors"
          >
            <Upload size={20} />
            <span className="text-xs">
              {uploading ? "Yükleniyor..." : "Ekle"}
            </span>
          </button>
        )}
      </div>

      <p className="text-xs text-gray-400 mt-2">
        {value.length}/{max} görsel. Sürükleyerek sıralayabilirsiniz. İlk görsel kapak fotoğrafıdır.
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleUpload}
      />
    </div>
  );
}
