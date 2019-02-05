import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskRoutes } from './tasks';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/tasks/list', 
		pathMatch: 'full' 
	},
	...TaskRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
