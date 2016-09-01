import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProject } from './project';
import { ProjectService } from './project.service';


@Component({
    templateUrl: 'app/projects/project-detail.component.html',
    styleUrls: [ 'app/projects/project-detail.component.css' ]
})

export class ProjectDetailComponent implements OnInit { 
    projectName: string = "Project Title Here";
    projectType: string;
    project: IProject;
    errorMessage: string;
    modalImg: string = "app/assets/images/160x120.png";
    displayModal: boolean = false;
    modalImgIndex: number = 0;
    
    constructor( private _projectService: ProjectService,
                    private _router: Router,
                    private _routeParams: ActivatedRoute ) {
        
    }
    
    ngOnInit() {
        if( !this.project ) {
           this.projectName =  this._routeParams.snapshot.params[ "name" ];
           this.projectType =  this._routeParams.snapshot.data[ 0 ]["type"];
           this.getProject( this.projectName, this.projectType );
        }  
    }
    
   getProject( name: string, type: string ) {
        this._projectService.getProject( name, type )
            .subscribe(
                project => this.project = project,
                error => this.errorMessage = <any>error);
        
    }
    
    onBack(): void {
        this._router.navigate( [ 'projects/' + this.projectType ] );
    }
    
    getDisplay(): string {
        if( this.displayModal ) {
            return "block";
        } else {
            return "none";
        }
    }
    
    left(): void {
        if( this.modalImgIndex > 0 ) {
            this.modalImgIndex -= 1;
        } else {
            this.modalImgIndex = this.project.imageUrls.length - 1;
        }
        this.modalImg = this.project.imageUrls[this.modalImgIndex];
    }
    
    right(): void {
        if( this.modalImgIndex < (this.project.imageUrls.length - 1) ) {
            this.modalImgIndex += 1;
        } else {
            this.modalImgIndex = 0;
        }
        this.modalImg = this.project.imageUrls[this.modalImgIndex];
    }
    
    // Get the modal
   /* modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    img = document.getElementById('myImg');
    modalImg = document.getElementById("img01");
    captionText: string = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }*/
    
}