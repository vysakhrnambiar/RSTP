import axios from 'axios';
import { Camera, CameraFormData } from '../types/camera';

const API_URL = 'http://localhost:8000';

export const api = {
  async getCameras() {
    const { data } = await axios.get<Record<string, Camera>>(`${API_URL}/cameras`);
    return data;
  },

  async addCamera(camera: CameraFormData) {
    const { data } = await axios.post(
      `${API_URL}/cameras?camera_id=${camera.id}`,
      camera
    );
    return data;
  },

  async deleteCamera(id: string) {
    const { data } = await axios.delete(`${API_URL}/cameras/${id}`);
    return data;
  },

  getCameraImageUrl(id: string) {
    return `${API_URL}/cameras/${id}/image`;
  }
};