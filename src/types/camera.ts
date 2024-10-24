export interface Camera {
  id: string;
  name: string;
  rtsp_url: string;
  username?: string;
  password?: string;
  fps: number;
  resolution: [number, number];
}

export interface CameraFormData extends Omit<Camera, 'id'> {
  id: string;
}