import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { BioComponent } from './bio/bio.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectDetailComponent } from './projects/project-detail.component';
import { routing }        from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent, HomeComponent, ResumeComponent, BioComponent, 
                    ProjectListComponent, ProjectDetailComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }