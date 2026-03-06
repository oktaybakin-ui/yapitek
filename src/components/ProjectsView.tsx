"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react";

interface CompletedProject {
  title: string;
  location: string;
  category: string;
  desc: string;
  materials: string[];
  image: string;
  images?: string[];
}

interface OngoingProject {
  title: string;
  location: string;
  category: string;
  desc: string;
  materials: string[];
  progress: number;
  image: string;
  images?: string[];
}

/* ── Lightbox ── */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 text-white/70 hover:text-white z-10"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 text-white/70 hover:text-white z-10"
          >
            <ChevronRight size={36} />
          </button>
        </>
      )}

      <div
        className="relative w-[90vw] h-[80vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt=""
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Image Gallery (card-level) ── */
function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (images.length === 0) return null;

  return (
    <>
      <div
        className="relative h-48 overflow-hidden bg-background cursor-pointer"
        onClick={() => setLightbox(true)}
      >
        <Image
          src={images[current]}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((c) => (c - 1 + images.length) % images.length);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((c) => (c + 1) % images.length);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(i);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === current ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {images.length > 1 && (
          <span className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
            {current + 1}/{images.length}
          </span>
        )}
      </div>

      {lightbox && (
        <Lightbox
          images={images}
          index={current}
          onClose={() => setLightbox(false)}
          onPrev={() =>
            setCurrent((c) => (c - 1 + images.length) % images.length)
          }
          onNext={() => setCurrent((c) => (c + 1) % images.length)}
        />
      )}
    </>
  );
}

function CompletedCard({ project }: { project: CompletedProject }) {
  const imgs = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <div className="bg-card rounded border border-border overflow-hidden hover-lift group">
      <div className="relative">
        <ImageGallery images={imgs} title={project.title} />
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
            <CheckCircle2 size={12} />
            Tamamlandı
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
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
  const imgs = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <div className="bg-card rounded border border-border overflow-hidden hover-lift group">
      <div className="relative">
        <ImageGallery images={imgs} title={project.title} />
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
            <Clock size={12} />
            Devam Ediyor
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
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
