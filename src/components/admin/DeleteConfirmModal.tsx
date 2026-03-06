"use client";

interface Props {
  open: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteConfirmModal({ open, title, onConfirm, onCancel }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6">
        <h3 className="text-lg font-semibold mb-2">Silme Onayı</h3>
        <p className="text-gray-600 text-sm mb-6">
          <strong>{title}</strong> öğesini silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm rounded border border-gray-300 hover:bg-gray-50"
          >
            İptal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded bg-red-600 text-white hover:bg-red-700"
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
}
