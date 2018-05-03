import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { InputComponent } from '../pages/input/input.component';
import { GridListComponent } from '../pages/grid-list/grid-list.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';


const APP_ROUTES: Routes = [

  {
    path: 'main', component: MainPageComponent, children: [
      { path: 'input', component: InputComponent },
      { path: 'gridlist', component: GridListComponent },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ]
})
export class AppRoutesModule {
}
