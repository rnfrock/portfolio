"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var resume_component_1 = require('./resume/resume.component');
var bio_component_1 = require('./bio/bio.component');
var projects_routes_1 = require('./projects/projects.routes');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    /*{ path: '', redirectTo: '/home', pathMatch: 'full' },*/
    { path: 'resume', component: resume_component_1.ResumeComponent },
    { path: 'bio', component: bio_component_1.BioComponent }
].concat(projects_routes_1.ProjectRoutes);
//export const APP_ROUTER_PROVIDERS = provideRouter( appRoutes );
exports.routing = router_1.RouterModule.forRoot(appRoutes);
'';
//# sourceMappingURL=app.routing.js.map