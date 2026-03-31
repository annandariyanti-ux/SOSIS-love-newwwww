export interface GameState {
  status: 'menu' | 'playing' | 'settings' | 'about' | 'opening' | 'layer3' | 'layer4';
  background: string;
  ktpImage?: string;
  videoOverlay?: string;
  soundtrack?: string;
  gameSoundtrack?: string;
  rainSound?: string;
  layer4Audio?: string;
  isDevMode: boolean;
  musicVolume: number;
  rainVolume: number;
  brightness: number;
}
