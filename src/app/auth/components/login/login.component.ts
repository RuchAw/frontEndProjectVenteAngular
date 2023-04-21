import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;
status:number=0;
messageStatus:string="";

  constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router
  ) { }

  //vérifier si l'utilisateur est connecté
ngOnInit() {
this.isUserLogin();
}
//lorsque on cliquer sur se connecter
onSubmit(form: NgForm) {
    console.log('Données envoyé ', form.value);
    this._api.post('utilisateurs/connexion', form.value).subscribe((res: any) => {
        console.log(res);
        this.status=res.status;
        
        //1.utilisateur connecté et compte est active
      if (this.status==1) {       
        this._auth.setDataInLocalStorage('utilisateurInfos', JSON.stringify(res.data));  
        this._auth.setDataInLocalStorage('token', res.token);  
        this._router.navigate(['/register']);
      }
      //2.utilisateur connecté et compte Mais compte n'est active
      else   if (this.status==2) {
          this.messageStatus="Votre compte n'est pas active pour le moment";
          }
          
    //3.Erreur de login et password  
     else   if (this.status==0) {
        this.messageStatus="Erreur login ou password sont incorrectes";
          }
    })
}

//vérifier si le localStage !=null
isUserLogin(){
if(this._auth.getUserDetails() != null){
this.isLogin = true;
    }
}

//vider localStorage
logout(){
    this._auth.clearStorage()
    this._router.navigate(['']);
  }
}