export interface CamerasState {
  activeCamera: string;
  cameras: CameraConfig[];
}

export interface CameraConfig {
  id: string;
  enabled: boolean;
  name: string;
  type: 'mjpgadaptive' | 'mjpgstream' | 'ipstream';
  url: string;
  fpstarget?: number;
  flipX: boolean;
  flipY: boolean;
}
