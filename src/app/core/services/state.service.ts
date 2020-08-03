import { Injectable } from '@angular/core';

import { remove } from 'lodash';

import { Module } from '../types/module.types';

type ModuleTypes = 'CUPBOARD';

interface ItemsType {
  name: string;
  id: number;
  type: ModuleTypes;
  data?: {
    specs: any;
    measurements: Module;
  };
}

@Injectable({
  providedIn: 'root'
})
class StateService {

  counter = 0;

  items: ItemsType[] = [];

  constructor() { }

  getItems(): ItemsType[] {
    return this.items;
  }

  addItem(name: string, type: ModuleTypes, data: any): void {
    this.counter++;
    this.items.push({
      id: this.counter,
      name,
      type,
      data
    });
  }

  removeItem(id: number): void {
    remove(this.items, (item: ItemsType) => item.id === id);
  }

}

export { ItemsType, StateService };
