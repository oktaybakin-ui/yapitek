"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

interface CompletedProject {
  title: string;
  location: string;
  category: string;
  desc: string;
  materials: string[];
  image: string;
}

interface OngoingProject {
  title: string;
  location: string;
  category: string;
  desc: string;
  materials: string[];
  progress: number;
  image: string;
}

function CompletedCard({ project }: { project: CompletedProject }) {
  return (
    <div className="bg-card rounded border border-border overflow-hidden hover-lift group">
      <div className="relative h-48 overflow-hidden bg-background">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
            <CheckCircle2 size={12} />
            Tamamlandı
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <div className="flex items-center gap-1.5 text-muted text-sm mt-1">
          <MapPin size={14} />
          {project.location}
        </div>
        <p className="text-muted text-sm mt-3 leading-relaxed">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.materials.map((m) => (
            <span
              key={m}
              className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function OngoingCard({ project }: { project: OngoingProject }) {
  return (
    <div className="bg-card rounded border border-border overflow-hidden hover-lift group">
      <div className="relative h-48 overflow-hidden bg-background">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
            <Clock size={12} />
            Devam Ediyor
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <div className="flex items-center gap-1.5 text-muted text-sm mt-1">
          <MapPin size={14} />
          {project.location}
        </div>
        <p className="text-muted text-sm mt-3 leading-relaxed">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.materials.map((m) => (
            <span
              key={m}
              className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium"
            >
              {m}
            </span>
          ))}
        </div>
        {/* İlerleme çubuğu */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-muted font-medium">İlerleme</span>
            <span className="font-bold text-accent">%{project.progress}</span>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsView({
  completedProjects,
  ongoingProjects,
}: {
  completedProjects: CompletedProject[];
  ongoingProjects: OngoingProject[];
}) {
  const [activeTab, setActiveTab] = useState<"completed" | "ongoing">(
    "completed"
  );

  return (
    <div className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Tab butonları */}
        <div className="flex gap-2 mb-10">
          <button
            onClick={() => setActiveTab("completed")}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all ${
              activeTab === "completed"
                ? "bg-accent text-white shadow-md"
                : "bg-card border border-border text-foreground hover:border-accent/30"
            }`}
          >
            <CheckCircle2 size={18} />
            Tamamlanan Projeler
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === "completed"
                  ? "bg-white/20"
                  : "bg-accent/10 text-accent"
              }`}
            >
              {completedProjects.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all ${
              activeTab === "ongoing"
                ? "bg-accent text-white shadow-md"
                : "bg-card border border-border text-foreground hover:border-accent/30"
            }`}
          >
            <Clock size={18} />
            Devam Eden Projeler
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === "ongoing"
                  ? "bg-white/20"
                  : "bg-accent/10 text-accent"
              }`}
            >
              {ongoingProjects.length}
            </span>
          </button>
        </div>

        {/* Tamamlanan Projeler */}
        {activeTab === "completed" && (
          <div>
            <p className="text-sm text-muted mb-6">
              <span className="font-semibold text-foreground">
                {completedProjects.length}
              </span>{" "}
              tamamlanan proje listeleniyor
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {completedProjects.map((p) => (
                <CompletedCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* Devam Eden Projeler */}
        {activeTab === "ongoing" && (
          <div>
            <p className="text-sm text-muted mb-6">
              <span className="font-semibold text-foreground">
                {ongoingProjects.length}
              </span>{" "}
              devam eden proje listeleniyor
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ongoingProjects.map((p) => (
                <OngoingCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* Alt CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded p-8">
          <div className="flex-1">
            <p className="font-semibold text-lg">
              Projeniz İçin Malzeme Tedarik Ortağı Arıyorsanız
            </p>
            <p className="text-sm text-muted mt-1">
              Proje detaylarınızı paylaşın, size özel tedarik planı
              hazırlayalım.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded text-sm font-semibold hover:bg-accent-dark transition-colors shrink-0"
          >
            Teklif Al
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
