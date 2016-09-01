import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';
import { ProjectService } from './projects/project.service';

@Component({
  selector: 'my-app',
  template: `
    <nav class= 'navbar navbar-fixed-top navbar-light bg-faded well'>
        <div class= 'container-fluid pull-right'>
            <a class= "navbar-brand" [routerLink]= "['']"> Home  |</a>
            <a class= "navbar-brand" [routerLink]= "['/resume']">  Resume  |</a>
            <a class= "navbar-brand" [routerLink]= "['/bio']">  Biography  |</a>
            <a class= "navbar-brand" [routerLink]= "[ '/projects/visual' ]">  Visual Projects  |</a>
            <a class= "navbar-brand" [routerLink]= "[ '/projects/technical' ]">  Web and Mobile Projects  |</a>
            <a class= "navbar-brand" [routerLink]= "[ 'projects/misc' ]">  Makers Projects  </a>   
        </div>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: [ 'app/app.component.css' ],
    directives: [ROUTER_DIRECTIVES],
    providers: [ ProjectService, HTTP_PROVIDERS ]
})

export class AppComponent {    
}
