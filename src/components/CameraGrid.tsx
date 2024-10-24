import React from 'react';
import { Camera } from '../types/camera';
import { CameraCard } from './CameraCard';

interface CameraGridProps {
  cameras: Record<string, Camera>;
  onDelete: (id: string) => void;
}

export function CameraGrid({ cameras, onDelete }: CameraGridProps) {
  if (Object.keys(cameras).length === 0) {
    return (
      <div className="text-center py-12">
        <div className="rounded-lg border-4 border-dashed border-gray-200 p-12">
          <div className="text-gray-500">
            <p className="text-xl font-semibold">No cameras configured</p>
            <p className="mt-2">Click the "Add Camera" button to get started.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(cameras).map(([id, camera]) => (
        <CameraCard
          key={id}
          id={id}
          camera={camera}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}