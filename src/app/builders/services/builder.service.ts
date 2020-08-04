import { Injectable } from '@angular/core';

import { CupboardDetails,  } from '../types/cupboard.types';
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
      skirting,
      skirtingHeight,
      dummy,
      dummyWidth,
      material,
      laminationInner = 'white',
      laminationOuter,
      division,
      shelves
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
        width: Math.round(depth - 25)
      }
    });
    const totalShelfWidth = width - (thickness * (division + 1));
    const shelfWidth = Math.floor(totalShelfWidth / division);
    let shelfWidthSum = 0;
    for (let div = 0; div < division - 1; div++) {
      const length = Math.round(shelfWidth);
      shelfWidthSum = shelfWidthSum + length;
      panels.push({
        label: 'Shelf',
        quantity: shelves[div],
        materialLabel: `${material} BSL ${laminationInner}`,
        edgeband: {
          left: edgeBand,
          right: '',
          top: '',
          bottom: ''
        },
        dimensions: {
          length,
          width: Math.round(depth - 25)
        }
      });
    }
    panels.push({
      label: 'Shelf',
      quantity: shelves[shelves.length - 1],
      materialLabel: `${material} BSL ${laminationInner}`,
      edgeband: {
        left: edgeBand,
        right: '',
        top: '',
        bottom: ''
      },
      dimensions: {
        length: Math.round(totalShelfWidth - shelfWidthSum),
        width: Math.round(depth - 25)
      }
    });
    if (backPanel) {
      const backPanelMaterialLabel = laminationInner === 'white' ? 'BSL white' : `Os ${laminationInner} Os white`;
      panels.push({
        label: 'Back Cover',
        quantity: 1,
        materialLabel: `${material} ${backPanelMaterialLabel}`,
        dimensions: {
          length: Math.round(width - thickness),
          width: Math.round(height - thickness)
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
