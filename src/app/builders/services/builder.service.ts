import { Injectable } from '@angular/core';

import { CupboardDetails, } from '../types/cupboard.types';
import { Module, Panel } from '../../core/types/module.types';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  constructor() { }

  buildCupboard(spec: CupboardDetails): Module {
    const {
      title,
      layout,
      height,
      width,
      depth,
      thickness,
      edgeBand,
      backPanel,
      backPanelMaterial,
      backPanelBuffer,
      skirting,
      skirtingHeight,
      dummy,
      dummyWidth,
      material,
      laminationInner = 'white',
      laminationOuter,
      division,
      compartments,
      frontSetBack = 0
    } = spec;
    /* tslint:disable:no-bitwise */
    const sideLayout = [(layout[0] ^ 1), (layout[1] ^ 1), (layout[2] ^ 1), (layout[3] ^ 1)];
    /* tslint:enable:no-bitwise */
    const carCageMaterialLabel = laminationInner === laminationOuter ? `BSL ${laminationInner}` : `Os ${laminationOuter} Os ${laminationInner}`;
    const top: Panel = {
      label: 'Top',
      quantity: 1,
      note: 'Grooving',
      materialLabel: `${material} ${carCageMaterialLabel}`,
      dimensions: {
        length: Math.round(width - ((thickness * layout[0]) + (thickness * layout[1]))),
        width: Math.round(depth)
      }, edgeband: {
        left: edgeBand,
        right: edgeBand,
        top: layout[0] ? '' : edgeBand,
        bottom: layout[1] ? '' : edgeBand
      }
    };
    const bottom: Panel = {
      label: 'Bottom',
      quantity: 1,
      note: 'Grooving',
      materialLabel: `${material} ${carCageMaterialLabel}`,
      dimensions: {
        length: Math.round(width - ((thickness * layout[2]) + (thickness * layout[3]))),
        width: Math.round(depth)
      }, edgeband: {
        left: edgeBand,
        right: edgeBand,
        top: layout[3] ? '' : edgeBand,
        bottom: layout[2] ? '' : edgeBand
      }
    };
    const left: Panel = {
      label: 'Side - Left',
      quantity: 1,
      note: 'Grooving',
      materialLabel: `${material} ${carCageMaterialLabel}`,
      dimensions: {
        length: Math.round(height - ((thickness * sideLayout[0]) + (thickness * sideLayout[3]))),
        width: Math.round(depth)
      }, edgeband: {
        left: edgeBand,
        right: edgeBand,
        top: layout[0] ? edgeBand : '',
        bottom: layout[3] ? edgeBand : ''
      }
    };
    const rigth: Panel = {
      label: 'Side - Right',
      quantity: 1,
      note: 'Grooving',
      materialLabel: `${material} ${carCageMaterialLabel}`,
      dimensions: {
        length: Math.round(height - ((thickness * sideLayout[1]) + (thickness * sideLayout[2]))),
        width: Math.round(depth)
      }, edgeband: {
        left: edgeBand,
        right: edgeBand,
        top: layout[1] ? edgeBand : '',
        bottom: layout[2] ? edgeBand : ''
      }
    };
    const panels: Panel[] = [rigth, left, top, bottom];
    panels.push({
      label: 'Division',
      quantity: (division - 1),
      materialLabel: `${material} BSL ${laminationInner}`,
      edgeband: {
        left: edgeBand,
        right: '',
        top: '',
        bottom: ''
      },
      dimensions: {
        length: Math.round(height - (thickness * 2)),
        width: Math.round(depth - backPanelBuffer)
      }
    });
    for (const comp of compartments) {
      if (comp.shelves > 1) {
        panels.push({
          label: 'Shelf',
          quantity: (comp.shelves - 1),
          materialLabel: `${material} BSL ${laminationInner}`,
          edgeband: {
            left: edgeBand,
            right: '',
            top: '',
            bottom: ''
          },
          dimensions: {
            length: comp.width,
            width: Math.round(depth - backPanelBuffer - frontSetBack)
          }
        });
      }

    }
    if (backPanel) {
      const backPanelMaterialLabel = laminationInner === 'white' ? 'BSL white' : `Os ${laminationInner} Os white`;
      const length = Math.max(Math.round(width - thickness), Math.round(height - thickness));
      const breadth = Math.min(Math.round(width - thickness), Math.round(height - thickness));
      panels.push({
        label: 'Back Cover',
        quantity: 1,
        materialLabel: `${backPanelMaterial} ${backPanelMaterialLabel}`,
        dimensions: {
          length,
          width: breadth
        }
      });
    }
    if (skirting) {
      panels.push({
        label: 'Skirting',
        quantity: 2,
        materialLabel: `${material} ${laminationInner}`,
        dimensions: {
          length: Math.round(width),
          width: Math.round(skirtingHeight)
        }
      });
      panels.push({
        label: 'Skirting',
        quantity: 2,
        materialLabel: `${material} ${laminationInner}`,
        dimensions: {
          length: Math.round(depth - (thickness * 2)),
          width: Math.round(skirtingHeight)
        }
      });
    }
    if (dummy) {
      panels.push({
        label: 'Outer Dummy',
        quantity: 1,
        materialLabel: `${material} ${carCageMaterialLabel}`,
        dimensions: {
          length: Math.round(height),
          width: Math.round(dummyWidth)
        }
      });
      panels.push({
        label: 'Inner Dummy',
        quantity: 1,
        materialLabel: `${material} BSL ${laminationInner}`,
        dimensions: {
          length: Math.round(height - (thickness * 2)),
          width: Math.round(dummyWidth)
        }
      });
    }
    return { title, panels };
  }
}
