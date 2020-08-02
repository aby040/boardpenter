import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { BuildersRoutingModule, BuildersModuleComponents } from './builders-routing.module';

@NgModule({
  declarations: [
    BuildersModuleComponents
  ],
  imports: [
    SharedModule,
    BuildersRoutingModule
  ]
})
export class BuildersModule { }
