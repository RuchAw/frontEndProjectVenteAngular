import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {

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


//Valider
onSubmit(form: NgForm) {

//.Envoyer les données et le token
 this._api.postAdmin('roles/ajouter', form.value).subscribe((res: any) => {
        console.log(res);
        this.status=res.status;
        
      //1.OK
      if (this.status==1) {       
        this.messageStatus="Roles bien ajouté";

      }
    //2.Erreur
     else   {
        this.messageStatus="ERREUR :Role non ajouté";
          }
    })
}


//vérifier si le localStage !=null
isUserLogin(){
if(this._auth.getUserDetails() != null){
this.isLogin = true;
    }
}


}