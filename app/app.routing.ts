import { provideRouter, RouterConfig, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { BioComponent } from './bio/bio.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectRoutes } from './projects/projects.routes';
 
const appRoutes: RouterConfig = [
    { path: '', component: HomeComponent },
    /*{ path: '', redirectTo: '/home', pathMatch: 'full' },*/
    { path: 'resume', component: ResumeComponent },
    { path: 'bio', component: BioComponent },
  
    ...ProjectRoutes
];

//export const APP_ROUTER_PROVIDERS = provideRouter( appRoutes );
export const routing = RouterModule.forRoot( appRoutes );
''