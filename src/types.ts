import { LucideIcon } from 'lucide-react';

export interface AppConfig {
  id: string;
  name: string;
  icon: LucideIcon;
  component: React.ComponentType<any>;
  defaultWidth?: number;
  defaultHeight?: number;
}

export interface WindowState {
  id: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  x: number;
  y: number;
}
