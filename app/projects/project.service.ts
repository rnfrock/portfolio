import { Injectable } from '@angular/core';
import { IProject } from './project';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {
    private _projUrl = 'api/projects/';
    
    constructor(private _http: Http) { }
    
    getProjects( type: string ): Observable<IProject[]> {
        // check type here and put all data into a single JSON file? 
        return this._http.get(this._projUrl + type + '.json')
                .map((response: Response) => <IProject[]>response.json())
                .do(data => console.log("All: " + JSON.stringify(data)))
                .catch(this.handleError);
    }
    
     getProject( name: string, type: string ): Observable<IProject> {
        return this.getProjects( type )
            .map((projects: IProject[]) => projects.find(p => p.name === name));
    }
    
    private handleError( error: Response ) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}