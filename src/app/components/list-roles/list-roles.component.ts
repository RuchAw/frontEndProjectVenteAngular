import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  isLogin: boolean = false;
  status: number=-1;
  messageStatus: any;
  userinfo: any;
  //afin de remplir la liste des roles
listeRoles:any=[];


constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router
  ) { }
  
//--------------------------
//afficher la liste des roles
ngOnInit() {
this.isUserLogin();
//charger la liste des roles from la table roles
 this._api.getSecure('roles').subscribe((data:any) => {
            this.listeRoles=data;
            
        }); 
}

//----------------------

//supprimer un role 
supprimer(idrole:number)
{
//.Envoyer les données et le token
 this._api.getSecureAvecParam('roles/supprimer', idrole).subscribe((res: any) => {
        console.log(res);
        this.status=res.status;
        
      //1.OK
      if (this.status==1) {       
        this.messageStatus="Roles bien supprimé";

      }
    //2.Erreur
     else   {
        this.messageStatus="ERREUR :Role non supprimer";
          }
    });
    
    //supprimer de la liste affiché 
    this.listeRoles = this.listeRoles.filter((item:any) => item.id !== idrole);
}


//--------------------
//vérifier si utilisateur infos existe déjà dans localStorage
isUserLogin(){
this.userinfo=this._auth.getUserDetails();
 if( this.userinfo!= null){
this.isLogin = true;
this.userinfo=JSON.parse(this.userinfo);
 }
 else
 {
      this._router.navigate(['/login']);
 }
}

}