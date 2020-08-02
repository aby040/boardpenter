interface PanelDimensions {
  length: number;
  width: number;
}

interface EdgebandConfig {
  left: string;
  right: string;
  top: string;
  bottom: string;
}

interface Panel {
  materialLabel: string;
  label: string;
  quantity: number;
  note?: string;
  dimensions: PanelDimensions;
  edgeband?: EdgebandConfig;
}

interface Module {
  title: string;
  panels: Panel[];
}

export {
  Panel,
  Module
};
