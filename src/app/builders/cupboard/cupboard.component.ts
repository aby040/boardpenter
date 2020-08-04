import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


import { find } from 'lodash';

import { BuilderService } from '../services/builder.service';
import { ItemsType, StateService } from '../../core/services/state.service';
import { CupboardDetails } from '../types/cupboard.types';
import { Module } from '../../core/types/module.types';

@Component({
  templateUrl: './cupboard.component.html',
  styleUrls: ['./cupboard.component.scss']
})
export class CupboardComponent implements OnInit {

  id: number;

  specification: Partial<CupboardDetails>;

  constructor(
    private builder: BuilderService,
    private state: StateService,
    private route: ActivatedRoute,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'cage_top_left_a',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cage_top_left_a.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cage_top_right_a',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cage_top_right_a.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cage_bottom_right_a',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cage_bottom_right_a.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cage_bottom_left_a',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cage_bottom_left_a.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cage_top_left_b',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cage_top_left_b.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cage_top_right_b',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cage_top_right_b.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cage_bottom_right_b',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cage_bottom_right_b.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cage_bottom_left_b',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cage_bottom_left_b.svg')
    );
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params.id, 10);
    if (this.id) {
      const { data } = find(this.state.getItems(), (item: ItemsType) => item.id === this.id) as ItemsType;
      this.specification = data.specs;
    } else {
      this.specification = {
        laminationInner: 'white',
        backPanelMaterial: '6mm PLY',
        division: 2,
        shelves: [0, 0],
        layout: [0, 0, 0, 0],
        backPanel: true,
        skirting: false
      };
    }
  }

  onDivisionCountChange(): void {
    this.specification.shelves = new Array(this.specification.division).fill(0);
  }

  save(): void {
    const cupboard: Module = this.builder.buildCupboard(this.specification as CupboardDetails);
    if (this.id) {
      this.state.editItem(
        this.id,
        cupboard.title,
        'CUPBOARD',
        {
          specs: this.specification,
          measurements: cupboard
        }
      );
    } else {
      this.state.addItem(
        cupboard.title,
        'CUPBOARD',
        {
          specs: this.specification,
          measurements: cupboard
        }
      );
    }
    this.router.navigate(['../../']);
  }

}
