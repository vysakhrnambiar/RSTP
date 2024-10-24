export interface Camera {
  name: string;
  rtsp_url: string;
  username?: string;
  password?: string;
  fps: number;
  resolution: [number, number];
}