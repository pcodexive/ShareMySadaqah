import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaymentIntent } from '@stripe/stripe-js';
import { AuthService } from './auth.service';
@Injectable()
export class ApiService {

    constructor(
        private authService: AuthService, private http: HttpClient
    ) { }

    get token() {
        return this.authService.getToken();
      }

      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })

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

    createPaymentIntent(amount: number): Observable<any> {
        return this.http.post<PaymentIntent>(
          `${environment.apiUrl}/user/intents/setup/capture?app=2`,
          { amount }, {headers: this.headers}
        );
    }
    createSetupIntent(): Observable<any> {
        return this.http.post<PaymentIntent>(
          `${environment.apiUrl}/user/intents/setup/create?app=2`,
          {"usage":"on_session","object":"subscription"}, {headers: this.headers}
        ).pipe(catchError(this.formatErrors));
      }
  

}

