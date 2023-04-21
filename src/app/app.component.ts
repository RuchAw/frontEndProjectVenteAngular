import { Component } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 userinfo:any;
 isLogin: boolean = false;
  
    constructor(
    private _auth:AuthService,
    private http:HttpClient,
    private _router:Router
    
  ) { }
  
  
ngOnInit(): void {
    //vérifier si utilisateur est connecté
  this.isUserLogin();
    }
        
isUserLogin(){
this.userinfo=this._auth.getUserDetails();
 if( this.userinfo!= null){
this.isLogin = true;
this.userinfo=JSON.parse(this.userinfo);
 }
}

logout(){
    this._auth.clearStorage();
    this.userinfo= null;
    this.isLogin = false;
    this._router.navigate(['/profile']);
  }


}
