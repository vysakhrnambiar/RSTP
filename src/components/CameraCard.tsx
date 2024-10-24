import React from 'react';
import { Trash2 } from 'lucide-react';
import { Camera } from '../types/camera';
import { api } from '../services/api';

interface CameraCardProps {
  camera: Camera;
  id: string;
  onDelete: (id: string) => void;
}

export function CameraCard({ camera, id, onDelete }: CameraCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{camera.name}</h3>
            <p className="text-sm text-gray-500">ID: {id}</p>
          </div>
          <button
            onClick={() => onDelete(id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mt-4 aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={api.getCameraImageUrl(id)}
            alt={camera.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" font-family="Arial" font-size="14" fill="%239ca3af" text-anchor="middle" dy=".3em">No Signal</text></svg>';
            }}
          />
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">URL:</span> {camera.rtsp_url}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">FPS:</span> {camera.fps}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Resolution:</span> {camera.resolution[0]}x{camera.resolution[1]}
          </p>
        </div>
      </div>
    </div>
  );
}