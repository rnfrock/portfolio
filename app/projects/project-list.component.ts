import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProject } from './project';
import { ProjectService } from './project.service';
import { ProjectDetailComponent } from './project-detail.component';

@Component({
    templateUrl:    'app/projects/project-list.component.html',
    styleUrls:      [ 'app/projects/project-list.component.css' ]
})

export class ProjectListComponent implements OnInit { 
    pageTitle: string = "Projects";
    thisType: string;
    projects: IProject[];
    errorMessage: string;
    
    constructor ( private _projectService: ProjectService,
                    private _router: Router,
                    private _routeParams: ActivatedRoute ) { }
    
    ngOnInit(): void {
         if( !this.projects ) {
           this.thisType =  this._routeParams.snapshot.data[ 0 ]["type"];
           this.getProjects( this.thisType );
           
           if( this.thisType == "visual" ) {
               this.pageTitle = "Visual Projects";
           } else if( this.thisType == "technical" ) {
               this.pageTitle = "Web and Mobile Projects";
           } else {
               this.pageTitle = "Makers Projects";
           }
        }
    }
    
    getProjects( type: string ) {
        this._projectService.getProjects( type )
            .subscribe(
                projects => this.projects = projects,
                error => this.errorMessage = <any>error); 
    }
    
}