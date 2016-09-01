import { RouterConfig, ActivatedRoute } from '@angular/router';
import { ProjectListComponent } from './project-list.component';
import { ProjectDetailComponent } from './project-detail.component';

export const ProjectRoutes: RouterConfig = [
    { path: 'projects/visual', component: ProjectListComponent, data: [{ type: 'visual' }] },
    { path: 'projects/visual/:name',  component: ProjectDetailComponent, data: [{ type: 'visual' }] },
    
    { path: 'projects/technical', component: ProjectListComponent, data: [{ type: 'technical' }] },
    { path: 'projects/technical/:name',  component: ProjectDetailComponent, data: [{ type: 'technical' }] },

    { path: 'projects/misc', component: ProjectListComponent, data: [{ type: 'misc' }] },
    { path: 'projects/misc/:name',  component: ProjectDetailComponent, data: [{ type: 'misc' }] }
];
