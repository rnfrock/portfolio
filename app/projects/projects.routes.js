"use strict";
var project_list_component_1 = require('./project-list.component');
var project_detail_component_1 = require('./project-detail.component');
exports.ProjectRoutes = [
    { path: 'projects/visual', component: project_list_component_1.ProjectListComponent, data: [{ type: 'visual' }] },
    { path: 'projects/visual/:name', component: project_detail_component_1.ProjectDetailComponent, data: [{ type: 'visual' }] },
    { path: 'projects/technical', component: project_list_component_1.ProjectListComponent, data: [{ type: 'technical' }] },
    { path: 'projects/technical/:name', component: project_detail_component_1.ProjectDetailComponent, data: [{ type: 'technical' }] },
    { path: 'projects/misc', component: project_list_component_1.ProjectListComponent, data: [{ type: 'misc' }] },
    { path: 'projects/misc/:name', component: project_detail_component_1.ProjectDetailComponent, data: [{ type: 'misc' }] }
];
//# sourceMappingURL=projects.routes.js.map