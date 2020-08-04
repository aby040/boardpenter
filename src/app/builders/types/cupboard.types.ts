
type LayoutType = 0 | 1;

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
  shelves: number[];
  backPanel: boolean;
  skirting: boolean;
  skirtingHeight: number;
  dummy: boolean;
  dummyWidth: number;
}



export {
  CupboardDetails
};
