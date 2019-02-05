import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { CreateTaskComponent } from './create';
import { EditTaskComponent } from './edit';

export const TaskRoutes: Routes = [
	{ 
		path: 'tasks', 
		redirectTo: 'tasks/list' 
	},
	{ 
		path: 'tasks/list', 
		component: ListTaskComponent 
	}, 
	{ 
		path: 'tasks/create', 
		component: CreateTaskComponent 
	},
	{ 
		path: 'tasks/edit/:id', 
		component: EditTaskComponent 
	}
];
