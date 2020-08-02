
import { Module, Panel } from '../types/module.types';

export class DownloaderUtil {

  public static downloadCsv(csvString: string, filename: string): void {
    const content = `\ufeff${csvString}`;
    const blob = new Blob([content], { type: 'application/octet-stream' });
    const fileUrl = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    document.body.appendChild(anchor);
    anchor.style.display = 'none';
    anchor.href = fileUrl;
    anchor.download = `${filename}.csv`;
    anchor.click();
    window.URL.revokeObjectURL(fileUrl);
    anchor.remove();
}

  public static buildSmart2dCsv(modules: Module[]): void {
    let smart2dCsv = '';
    modules.forEach((module: Module) => {
      const { title, panels } = module;
      smart2dCsv = smart2dCsv + panels.reduce((str, panel: Panel) => {
          const { label, quantity, note = '', dimensions, edgeband, materialLabel } = panel;
          const { length, width } = dimensions;
          const { left = '', right = '', top = '', bottom = '' } = edgeband || {};
          return str + `${label}, ${length}, ${width}, ${quantity}, , ${materialLabel}, ${title}, ${left}, ${top}, ${right}, ${bottom}, , ${note}\n`;
      }, '');
    });
    DownloaderUtil.downloadCsv(smart2dCsv, 'cutting_list');
  }

}

