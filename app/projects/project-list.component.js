"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var project_service_1 = require('./project.service');
var ProjectListComponent = (function () {
    function ProjectListComponent(_projectService, _router, _routeParams) {
        this._projectService = _projectService;
        this._router = _router;
        this._routeParams = _routeParams;
        this.pageTitle = "Projects";
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        if (!this.projects) {
            this.thisType = this._routeParams.snapshot.data[0]["type"];
            this.getProjects(this.thisType);
            if (this.thisType == "visual") {
                this.pageTitle = "Visual Projects";
            }
            else if (this.thisType == "technical") {
                this.pageTitle = "Web and Mobile Projects";
            }
            else {
                this.pageTitle = "Makers Projects";
            }
        }
    };
    ProjectListComponent.prototype.getProjects = function (type) {
        var _this = this;
        this._projectService.getProjects(type)
            .subscribe(function (projects) { return _this.projects = projects; }, function (error) { return _this.errorMessage = error; });
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/projects/project-list.component.html',
            styleUrls: ['app/projects/project-list.component.css']
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router, router_1.ActivatedRoute])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map