import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuilderService } from '../services/builder.service';
import { StateService } from '../../core/services/state.service';
import { CupboardDetails } from '../types/cupboard.types';
import { Module } from '../../core/types/module.types';

@Component({
  templateUrl: './cupboard.component.html',
  styleUrls: ['./cupboard.component.scss']
})
export class CupboardComponent implements OnInit {

  specification: Partial<CupboardDetails> = {
    division: 2,
    shelves: [0, 0],
    layout: [0, 0, 0, 0],
    backPanel: true,
    skirting: false
  };

  constructor(private builder: BuilderService, private state: StateService, private router: Router) { }

  ngOnInit(): void {
  }

  onDivisionCountChange(): void {
    this.specification.shelves = new Array(this.specification.division).fill(0);
  }

  save(): void {
    const cupboard: Module = this.builder.buildCupboard(this.specification as CupboardDetails);
    console.log(cupboard);
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
