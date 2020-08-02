import { Component, OnInit } from '@angular/core';

import { ItemsType, StateService } from '../services/state.service';

import { DownloaderUtil } from '../utils/donwloader';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type'];
  dataSource: ItemsType[];

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.dataSource = this.state.getItems();
  }

  donwload(): void {
    const modules = [];
    this.dataSource.forEach((item: ItemsType) => {
      modules.push(item.data.measurements);
    });
    DownloaderUtil.buildSmart2dCsv(modules);
  }

}
