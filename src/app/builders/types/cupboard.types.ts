
type LayoutType = 0 | 1;

interface Compartment {
  shelves: number;
  buffer: number;
  width: number;
}

interface CupboardDetails {
  title: string;
  material: string;
  laminationInner: string;
  laminationOuter: string;
  height: number;
  width: number;
  depth: number;
  thickness: number;
  edgeBand: string;
  layout: [LayoutType, LayoutType, LayoutType, LayoutType];
  division: number;
  compartments: Compartment[];
  backPanel: boolean;
  backPanelMaterial: string;
  backPanelBuffer: number;
  skirting: boolean;
  skirtingHeight: number;
  dummy: boolean;
  dummyWidth: number;
}



export {
  CupboardDetails,
  Compartment
};
