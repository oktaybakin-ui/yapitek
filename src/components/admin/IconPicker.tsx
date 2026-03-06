"use client";

import {
  Droplets,
  Layers,
  Paintbrush,
  FlaskConical,
  Hammer,
  Building2,
  Package,
  Wrench,
  Shield,
  Warehouse,
} from "lucide-react";

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Droplets,
  Layers,
  Paintbrush,
  FlaskConical,
  Hammer,
  Building2,
  Package,
  Wrench,
  Shield,
  Warehouse,
};

interface Props {
  value: string;
  onChange: (name: string) => void;
}

export default function IconPicker({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {Object.entries(icons).map(([name, Icon]) => (
        <button
          key={name}
          type="button"
          onClick={() => onChange(name)}
          className={`p-3 rounded border-2 flex items-center justify-center transition-colors ${
            value === name
              ? "border-accent bg-accent/10 text-accent"
              : "border-gray-200 text-gray-500 hover:border-gray-300"
          }`}
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  );
}
