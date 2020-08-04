import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  specification: Partial<CupboardDetails>;

  constructor(private builder: BuilderService, private state: StateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      const { data } = find(this.state.getItems(), (item: ItemsType) => item.id = +id) as ItemsType;
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
    this.state.addItem(
      cupboard.title,
      'CUPBOARD',
      {
        specs: this.specification,
        measurements: cupboard
      }
    );
    this.router.navigate(['../../']);
  }

}
