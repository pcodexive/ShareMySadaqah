import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient
    ) { }
    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${environment.apiUrl}${path}`,body
        ).pipe(catchError(this.formatErrors));
    }


    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.apiUrl}${path}`, { params: params })
            .pipe(catchError(this.formatErrors));
    }
    private formatErrors(error: any) {
        return throwError(error.error);
    }

    
  

}

