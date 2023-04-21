import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';



@Injectable({
    providedIn: 'root'
})
export class ApiService {
    baseUrl = 'http://localhost:8081/apis/';
    constructor(private _http: HttpClient, private authService: AuthService) {
    }

    //permet d'éxécuter une méthode post et retourne le résultat
    postAdmin(url: string, param: any) {
        //1.récupérer token
        const auth_token = this.authService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `${auth_token}`
            })
        };
        return this._http.post(this.baseUrl + "" + url, param, httpOptions).pipe(map(res => {
            return res;
        }));
    }

    getSecure(url: string) {
        //1.récupérer token
        const auth_token = this.authService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `${auth_token}`
            })
        };
        //2.envoyer la requete
        return this._http.get(this.baseUrl + "" + url, httpOptions).pipe(map(res => {
            return res;
        }));
    }

    getSecureAvecParam(url: string, param: any) {
        //1.récupérer token
        const auth_token = this.authService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `${auth_token}`
            })
        };
        //2.envoyer la requete
        return this._http.get(this.baseUrl + "" + url + "/" + param, httpOptions).pipe(map(res => {
            return res;
        }));
    }

    //permet d'éxécuter une méthode post et retourne le résultat
    post(url: string, param: any) {
        return this._http.post(this.baseUrl + "" + url, param).pipe(map(res => {
            return res;
        }));
    }


    //exécuter des get dans le serveur 
    get(url: string) {
        return this._http.get(this.baseUrl + "" + url).pipe(map(res => {
            return res;
        }));
    }


}

