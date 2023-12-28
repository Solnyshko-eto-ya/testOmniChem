export enum CardStyle {
  ROLL_UP,
  UN_WRAP,
}

export enum ButtonStyle {
  ROUND,
  GRAY,
  BLUE,
}

// export interface CollapseItems {
//   key: string;
//   label: string;
//   children: React.ReactNode;
// }

export enum InputStyle {
  DEFAULT,
}

export interface Material {
  id: string;
  manufactureName: string;
  materialName: string;
  readyToUseProductType: string;
  compatibleSubstratesAndSurfaces: string;
  features: string;
  chemicalFamily: string;
  description: string;
}
