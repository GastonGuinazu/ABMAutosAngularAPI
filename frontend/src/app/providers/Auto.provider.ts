import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Auto } from "../interfaces/Auto";



@Injectable({
    providedIn: 'root'
})
export class AutosProvider {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Auto[]> {
        const url = environment.url + 'Auto';
        return this.http.get<Auto[]>(url).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.log("algo paso, error: " + error.message)
        }
        else {
            console.log("Status code: " + error.status);
            console.log(error);
        }
        return throwError(() => new Error(error.error))
    }

    create(
        patente?: string,
        modelo?: number,
        marca?: string): Observable<Auto> {
        const url = environment.url + "Auto";
        const request = {
            "patente": patente,
            "marca": marca,
            "modelo": modelo
        }
        const header = { 'content-type': 'application/json' };
        return this.http.post<Auto>(url, request, { headers: header }).pipe(catchError(this.handleError));
    }

    getById(patente: string): Observable<Auto> {
        const url = environment.url + "Auto/" + patente;
        return this.http.get<Auto>(url).pipe(catchError(this.handleError));
    }

    edit(patente?: string,
        marca?: string,
        modelo?: number): Observable<Auto>{
            const url = environment.url + "Auto/" + patente;
            const request = {
                "patente": patente,
                "marca": marca,
                "modelo": modelo
            }
            const header = { 'content-type': 'application/json' };
            return this.http.put<Auto>(url,request,{headers: header}).pipe(catchError(this.handleError));
        }

        delete(patente: string): Observable<any>{
            const url = environment.url+ 'Auto/'+ patente;
            return this.http.delete(url).pipe(catchError(this.handleError)); 
        }


}