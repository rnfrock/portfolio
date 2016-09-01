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
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(_projectService, _router, _routeParams) {
        this._projectService = _projectService;
        this._router = _router;
        this._routeParams = _routeParams;
        this.projectName = "Project Title Here";
        this.modalImg = "app/assets/images/160x120.png";
        this.displayModal = false;
        this.modalImgIndex = 0;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        if (!this.project) {
            this.projectName = this._routeParams.snapshot.params["name"];
            this.projectType = this._routeParams.snapshot.data[0]["type"];
            this.getProject(this.projectName, this.projectType);
        }
    };
    ProjectDetailComponent.prototype.getProject = function (name, type) {
        var _this = this;
        this._projectService.getProject(name, type)
            .subscribe(function (project) { return _this.project = project; }, function (error) { return _this.errorMessage = error; });
    };
    ProjectDetailComponent.prototype.onBack = function () {
        this._router.navigate(['projects/' + this.projectType]);
    };
    ProjectDetailComponent.prototype.getDisplay = function () {
        if (this.displayModal) {
            return "block";
        }
        else {
            return "none";
        }
    };
    ProjectDetailComponent.prototype.left = function () {
        if (this.modalImgIndex > 0) {
            this.modalImgIndex -= 1;
        }
        else {
            this.modalImgIndex = this.project.imageUrls.length - 1;
        }
        this.modalImg = this.project.imageUrls[this.modalImgIndex];
    };
    ProjectDetailComponent.prototype.right = function () {
        if (this.modalImgIndex < (this.project.imageUrls.length - 1)) {
            this.modalImgIndex += 1;
        }
        else {
            this.modalImgIndex = 0;
        }
        this.modalImg = this.project.imageUrls[this.modalImgIndex];
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/projects/project-detail.component.html',
            styleUrls: ['app/projects/project-detail.component.css']
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router, router_1.ActivatedRoute])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map