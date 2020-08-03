import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CupboardComponent } from './cupboard/cupboard.component';
import { BuildersModule } from './builders.module';

const routes: Routes = [
    {
        path: 'cupboard',
        component: CupboardComponent
    },
    {
      path: 'cupboard/:id',
      component: CupboardComponent
  }
];

const BuildersRoutingModule: ModuleWithProviders<BuildersModule> = RouterModule.forChild(routes);

const BuildersModuleComponents = [
  CupboardComponent
];

export {
    BuildersRoutingModule,
    BuildersModuleComponents
};
